import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  timeout: 10000,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
