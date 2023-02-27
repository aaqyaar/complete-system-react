import { axios } from "utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

export default class AuthAPI {
  public static login = createAsyncThunk(
    "auth/login",
    async (values: any, { rejectWithValue }: any) => {
      const { email, password } = values;
      try {
        const res = await axios.post("/auth/login", {
          email,
          password,
        });
        return {
          headers: res.headers,
          data: res.data,
        };
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
}
