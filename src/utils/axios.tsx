import { CheckStatusCode } from "utils/error-codes";
import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { logout } from "redux/slices/authSlice";
import { useAppDispatch } from "hooks";
import { PATH_AUTH } from "routes/paths";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  timeout: 10000,
});

// export function AxiosInterceptor({ children }: { children: ReactNode }): any {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     instance.defaults.headers.common["Content-Type"] = "application/json";

//     const resInterceptor = (response: any) => {
//       return response;
//     };

//     const errInterceptor = (error: any) => {
//       dispatch(logout());
//       if (error.response.status === 401) {
//         return navigate("/auth/login");
//       }
//       return Promise.reject(error.response && error.response.data);
//     };

//     const interceptor = instance.interceptors.response.use(
//       (response) => resInterceptor(response),
//       (error) => errInterceptor(error)
//     );

//     return () => instance.interceptors.response.eject(interceptor);
//   }, [navigate, dispatch]);

//   return <>{children}</>;
// }

export function AxiosInterceptor({ children }: { children: ReactNode }) {
  instance.interceptors.response.use(undefined, (error) => {
    const statusCode = error.response ? error.response.status : 400;

    if (statusCode === 401) {
      localStorage.removeItem("redux-root");
      return <Navigate to={PATH_AUTH.login} />;
    }

    if (statusCode >= 500) {
      // show server error
    }

    if (statusCode === 400) {
      localStorage.removeItem("redux-root");
      return <Navigate to={PATH_AUTH.login} />;
      // show bad request error
    }

    return Promise.reject(error);
  });

  return <>{children}</>;
}

export default instance;
