import { configureStore } from "@reduxjs/toolkit";
import apiService from "../services/restaurantService";
import cartReducer from "./reducers/cart";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware)
});

export type RootReducer = ReturnType<typeof store.getState>;
