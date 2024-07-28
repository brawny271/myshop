import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
