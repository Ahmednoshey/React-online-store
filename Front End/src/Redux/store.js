import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi,oneproductApi } from "./productsApi";
import counterReducer from "./mydataSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [oneproductApi.reducerPath]: oneproductApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(productsApi.middleware)
  .concat(oneproductApi.middleware),
});

setupListeners(store.dispatch);
