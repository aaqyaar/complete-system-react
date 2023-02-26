import axios from "utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export default class AuthApi {
  public static async login(email: string, password: string) {
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
      return error;
    }
  }
}
