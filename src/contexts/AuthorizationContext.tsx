import { useAuth } from "hooks";
import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";
import { axios } from "utils";

import { Icon } from "@iconify/react";
import { Icons } from "icons-exports";

// icons

import { PATH_ADMIN } from "routes/paths";
import { CheckStatusCode } from "utils/error-codes";

// ----------------------------------------------------------------------

const getIconify = (name: any) => <Icon width={100} height={100} icon={name} />;

const ICONS = {
  overview: getIconify(Icons.roundSpaceDashboard),

  invoices: getIconify(Icons.roundInventory2),

  settings: getIconify(Icons.settings2Fill),
  users: getIconify(Icons.roundSupervisedUserCircle),
};

const AuthorizationContext = createContext({
  sidebarConfig: [{}],
});

export const AuthorizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const sidebarConfig = [
    // GENERAL
    // ----------------------------------------------------------------------
    {
      subheader: "Management",
      items: [
        {
          title: "Overview",
          path: PATH_ADMIN.directories.overview,
          icon: ICONS.overview,
        },
        {
          title: "User Management",
          path: "/admin/user-management",
          icon: ICONS.users,
          permissionRoute: "user_management_access",

          children: [
            {
              title: "Permissions",
              path: PATH_ADMIN.directories.userManagement.permissions,
              permissionRoute: "permission_access",
            },
            {
              title: "Roles",
              path: PATH_ADMIN.directories.userManagement.roles,
              permissionRoute: "role_access",
            },
            {
              title: "Users",
              path: PATH_ADMIN.directories.userManagement.users,
              permissionRoute: "user_access",
            },
          ],
        },

        {
          title: "Settings",
          path: PATH_ADMIN.directories.settings.root,
          icon: ICONS.settings,
          children: [
            {
              title: "General",
              path: PATH_ADMIN.directories.settings.general,
            },
            {
              title: "Privileges",
              path: "privileges",
            },
          ],
        },
      ],
    },
  ];

  const [data, setData] = useState<any>([]);
  const { token } = useAuth();
  const getAbilities = async (token: string, signal?: any) => {
    const res = await axios.get("/v1/abilities", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      signal,
    });
    return res.data;
  };
  useEffect(() => {
    const abort = new AbortController();
    async function loadAbilities(token: string) {
      const data = await getAbilities(token, abort.signal);
      setData(data?.data);
    }
    loadAbilities(token);
    return () => {
      abort.abort();
    };
  }, [token]);

  // map sidebar config and also map data return also similar navs and subnavs
  const sidebarConfigWithPermissions = sidebarConfig.map((item) => {
    const { items } = item;
    const itemsWithPermissions = items?.map((item: any) => {
      const { children, permissionRoute } = item;

      const childrenWithPermissions = children?.map((item: any) => {
        const { permissionRoute } = item;
        const itemByPermission = data?.find((i: any) => i === permissionRoute);
        const findByHisItems = Array(item)?.find(
          (i: any) => i.permissionRoute === itemByPermission
        );
        return {
          ...findByHisItems,
        };
      });

      const itemByPermission = data?.find((i: any) => i === permissionRoute);
      const itemInfo = Array(item)?.find(
        (i: any) => i.permissionRoute === itemByPermission
      );

      return {
        ...itemInfo,
        children: childrenWithPermissions,
      };
    });
    return {
      ...item,
      items: itemsWithPermissions,
    };
  });

  return (
    <AuthorizationContext.Provider
      value={{ sidebarConfig: sidebarConfigWithPermissions }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorizedSidebar = () => useContext(AuthorizationContext);
