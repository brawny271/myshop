import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {
    items: [],
    status: "idle",
    error: null,
  },
  selectedCategory: "all",
  filters: {
    category: [],
    priceRange: [],
    ratingRange: [],
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products.items = action.payload;
      state.products.status = "succeeded";
    },
    setProductsError: (state, action) => {
      state.products.error = action.payload;
      state.products.status = "failed";
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilterOptions: (state, action) => {
      const { filterType, value } = action.payload;
      state.filters[filterType] = value;
    },
    clearFilters: (state) => {
      state.filters = {
        category: [],
        priceRange: [],
        ratingRange: [],
      };
    },
  },
});

export const {
  setProducts,
  setProductsError,
  setCategory,
  setFilterOptions,
  clearFilters,
} = dataSlice.actions;

export default dataSlice.reducer;
