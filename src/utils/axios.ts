import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  timeout: 10000,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

instance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default instance;
