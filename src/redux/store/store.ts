import { rootReducer } from "./rootReducer";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
