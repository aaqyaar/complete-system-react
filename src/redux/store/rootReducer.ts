import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "redux/slices/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  keyPrefix: "redux-",
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});
