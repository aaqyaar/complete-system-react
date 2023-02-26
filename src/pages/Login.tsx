import { Button } from "@mui/material";
import { useAppDispatch } from "hooks";
import AuthApi from "redux/api/auth";
import { login } from "redux/slices/authSlice";

export default function Login() {
  const dispatch = useAppDispatch();

  const HandleLogin = async () => {
    const res: any = await AuthApi.login("admin@admin.com", "password");
    if (res.response.status !== 401) {
      dispatch(login(res));
    } else {
      console.error(res.response.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <Button onClick={HandleLogin}>Login</Button>
    </div>
  );
}
