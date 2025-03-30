import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "@/app/_modules/main/slices/mainSlice";
import navReducer from "@/app/_modules/nav/slices/navSlice";
import productsReducer from "@/app/_modules/products/slices/productsSlice";
import cartReducer from "@/app/_modules/cart/slices/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      main: mainReducer,
      nav: navReducer,
      products: productsReducer,
      cart: cartReducer,
    }
  })
}
export const store = makeStore(); // server side store

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]