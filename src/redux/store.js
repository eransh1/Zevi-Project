import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./searchSlice";
import productsSliceReducer from "./productsSlice";

export const store = configureStore({
    reducer: {
      search:searchSliceReducer,
      products:productsSliceReducer,
    },
  });