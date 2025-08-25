import { configureStore } from "@reduxjs/toolkit";
import apiService from "../services/restaurantService";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware)
});

export type RootReducer = ReturnType<typeof store.getState>;
