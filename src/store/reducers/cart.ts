import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type StateCart = { foods: MenuItem[], isOpen: boolean };
const initialState: StateCart = { foods: [], isOpen: false };

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
  }
});

export const { AddItemCart, removeItemCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
