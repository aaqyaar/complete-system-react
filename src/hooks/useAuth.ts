import { useAppSelector } from "./redux-hooks";

const useAuth = () => useAppSelector((state) => state.auth);
export default useAuth;
