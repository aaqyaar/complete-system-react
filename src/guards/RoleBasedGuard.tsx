import { useAuthorizedSidebar } from "contexts/AuthorizationContext";
import { ReactNode } from "react";

export default function RoleBasedGuard({ children }: { children: ReactNode }) {
  const { sidebarConfig }: any = useAuthorizedSidebar();

  const sidebarItems = sidebarConfig.map((i: any) => {
    const { items } = i;
    const navs: [] = items.filter((item: any) => item.title !== undefined);
    return { ...navs };
  });

  // const paths = sidebar?.map((item: any) => {
  //   const { path } = item;

  //   const childrenPaths = item.children.map((i: any) => {
  //     const { path } = i;
  //     return { ...path };
  //   });
  //   return { ...path, children: childrenPaths };
  // });

  // console.log(paths);

  return <>{children}</>;
}
