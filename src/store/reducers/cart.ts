import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type StateCart = { foods: MenuItem[], isOpen: boolean, isPayment: boolean, isDelivery: boolean };
const initialState: StateCart = { foods: [], isOpen: false, isPayment: false, isDelivery: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemCart: (state, action: PayloadAction<MenuItem>) => {
      const item = state.foods.find(({ id }) => id === action.payload.id);
      if (!item) {
        state.foods.push(action.payload);
      } else {
        alert("Produto já adicionado ao seu carrinho.")
      }
    },
    removeItemCart: (state, action: PayloadAction<number>) => {
      state.foods = state.foods.filter(({ id }) => id !== action.payload);
    },
    openCart: (state) => { state.isOpen = true },
    closeCart: (state) => { state.isOpen = false },
    clearCart: (state) => { state.foods = [] },
    openPayment: (state) => { state.isPayment = true },
    closePayment: (state) => { state.isPayment = false },
    openDelivery: (state) => { state.isDelivery = true },
    closeDelivery: (state) => { state.isDelivery = false },
  }
});

export const { AddItemCart, removeItemCart,
  openCart, closeCart, clearCart,
  closeDelivery, openDelivery,
  closePayment, openPayment } = cartSlice.actions;
export default cartSlice.reducer;
