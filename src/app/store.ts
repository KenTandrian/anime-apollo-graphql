import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "./containers/HomePage/homePageSlice";
import ReduxLogger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    if (import.meta.env.PROD) return getDefaultMiddleware();
    else return getDefaultMiddleware().concat(ReduxLogger);
  },
  reducer: {
    homePage: homePageReducer,
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
