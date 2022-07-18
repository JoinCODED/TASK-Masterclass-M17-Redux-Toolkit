import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import cookieReducer from "../features/cookies/cookieSlice";

export const store = configureStore({
  reducer: {
    cookies: cookieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
