import { useAuth } from "hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { PATH_DASHBOARD } from "../routes/paths";

export default function GuestGuard({ children }: { children: ReactNode }) {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
