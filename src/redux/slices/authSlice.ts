import { createSlice } from "@reduxjs/toolkit";

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
    login(state: AuthState, action: any) {
      state.token = action.payload.token;
      state.isAuth = true;
    },
    logout(state: AuthState) {
      state.token = "";
      state.isAuth = false;
    },
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;
