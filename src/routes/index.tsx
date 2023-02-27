import DashboardLayout from "layouts/dashboard";
import { Fragment, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/404";
import { AuthGuard, GuestGuard } from "guards";
import Login from "pages/auth/Login";
import { PATH_ADMIN } from "./paths";
import { LoadingScreen } from "components";

interface IRoutes {
  id: number;
  component: React.FC;
  path: string;
  layout?: React.FC;
  guard?: any;
}

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
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

      <Route
        path="/"
        element={<Navigate to={PATH_ADMIN.directories.overview} />}
      />
      <Route
        path="/auth/login"
        element={
          <GuestGuard>
            <Login />
          </GuestGuard>
        }
      />
      <Route
        path="/"
        element={<Navigate to={PATH_ADMIN.directories.overview} />}
      />
      <Route
        path="/dashboard"
        element={<Navigate to={PATH_ADMIN.directories.overview} />}
      />
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
    component: Loadable(lazy(() => import("pages/dashboard/GeneralApp"))),
    path: PATH_ADMIN.directories.overview,
  },

  {
    id: 2,
    layout: DashboardLayout,
    guard: AuthGuard,
    component: Loadable(lazy(() => import("pages/dashboard/UserList"))),
    path: PATH_ADMIN.directories.userManagement.users,
  },
];
