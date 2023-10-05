import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "./containers/HomePage/homePageSlice";
import { createLogger } from "redux-logger";

const logger = createLogger({ duration: true });

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    if (import.meta.env.PROD) return getDefaultMiddleware();
    else return getDefaultMiddleware().concat(logger);
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
