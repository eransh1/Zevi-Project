import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./searchSlice";

export const store = configureStore({
    reducer: {
      search:searchSliceReducer
    },
  });