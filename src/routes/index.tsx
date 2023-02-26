import { DashboardLayout } from "layouts";
import { Fragment, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/404";
import { AuthGuard } from "guards";
import Login from "pages/Login";

interface IRoutes {
  id: number;
  component: React.FC;
  path: string;
  layout?: React.FC;
  guard?: any;
}

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ component, layout, path, guard, id }) => {
        const Component = component;
        const Layout = layout || Fragment;
        const Guard = guard || Fragment;
        return (
          <Route key={id} element={<Layout />}>
            <Route
              path={path}
              element={
                <Guard>
                  <Component />
                </Guard>
              }
            />
          </Route>
        );
      })}

      <Route path="/" element={<Navigate to={"/dashboard/app"} />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/" element={<Navigate to={"/dashboard/app"} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// public routes and private routes // imports
const routes: IRoutes[] = [
  {
    id: 1,
    layout: DashboardLayout,
    guard: AuthGuard,
    component: Loadable(lazy(() => import("pages/DashboardApp"))),
    path: "/dashboard/app",
  },
];
