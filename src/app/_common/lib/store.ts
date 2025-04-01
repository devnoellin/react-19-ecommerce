import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "@/app/_modules/main/slices/mainSlice";
import navReducer from "@/app/_modules/nav/slices/navSlice";
import productsReducer from "@/app/_modules/products/slices/productsSlice";
import cartReducer from "@/app/_modules/cart/slices/cartSlice";

const isDevelopment = process.env.NODE_ENV === "development";
const isEnabledLogger = process.env.ENABLED_REDUX_LOGGER === "true";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const makeStore = () => {
  return configureStore({
    reducer: {
      main: mainReducer,
      nav: navReducer,
      products: productsReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => {
      const middlewares = getDefaultMiddleware();

      if (isDevelopment && isEnabledLogger) {
        middlewares.push(logger);
      }

      return middlewares;
    },
  })
}
export const store = makeStore();

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]