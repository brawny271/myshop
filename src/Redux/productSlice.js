import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    setProductsError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { setProducts, setProductsError } = productSlice.actions;
export default productSlice.reducer;