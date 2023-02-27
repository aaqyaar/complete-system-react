import { Icon } from "@iconify/react";
import { Icons } from "icons-exports";

// icons

import { PATH_ADMIN } from "routes/paths";

// ----------------------------------------------------------------------

const getIconify = (name: any) => <Icon width={100} height={100} icon={name} />;

const ICONS = {
  overview: getIconify(Icons.roundSpaceDashboard),

  invoices: getIconify(Icons.roundInventory2),

  settings: getIconify(Icons.settings2Fill),
  users: getIconify(Icons.roundSupervisedUserCircle),
};

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
        children: [
          {
            title: "Permissions",
            path: PATH_ADMIN.directories.userManagement.permissions,
          },
          {
            title: "Roles",
            path: PATH_ADMIN.directories.userManagement.roles,
          },
          {
            title: "Users",
            path: PATH_ADMIN.directories.userManagement.users,
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

export default sidebarConfig;
