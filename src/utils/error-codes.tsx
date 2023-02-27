import { PATH_AUTH } from "routes/paths";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "hooks";
import { logout } from "redux/slices/authSlice";

export function CheckStatusCode(code: number) {
  // const dispatch = useAppDispatch();
  if (code === 401) {
    //401 Unauthorized
    // return (window.location = "/auth/login" as any);
    // localStorage.setItem("redux-root", {
    //   isAuth: false,
    //   token: "",
    // });
    // return dispatch(logout());
    //return (window.location.pathname = "/auth/login");
  }
}
