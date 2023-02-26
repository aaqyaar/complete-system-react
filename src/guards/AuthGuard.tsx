import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const isAuth = true;
  // const location = useLocation();
  // isAuth ? { children } : <Navigate to={"/login"} />;
  return <div>{children}</div>;
}
