import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) state.push({ ...action.payload, quantity: 1 });
    },
    increase: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrease: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    remove: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
