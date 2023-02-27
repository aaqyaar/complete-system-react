import { createSlice } from "@reduxjs/toolkit";
import AuthAPI from "redux/api/auth";

interface AuthState {
  token: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  token: "",
  isAuth: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state: AuthState) {
      state.token = "";
      state.isAuth = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(AuthAPI.login.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        state.isAuth = true;
      })
      .addCase(AuthAPI.login.rejected, (state, action) => {
        state.isAuth = false;
        state.token = "";
      });
  },
});

export const { logout } = slice.actions;

export default slice.reducer;
