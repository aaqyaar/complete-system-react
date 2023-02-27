import { useAuth } from "hooks";
import { ReactNode, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PATH_AUTH } from "routes/paths";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { pathname }: any = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);
  const { isAuth } = useAuth();
  if (!isAuth) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={PATH_AUTH.login} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
