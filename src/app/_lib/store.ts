import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '@/app/_slices/main/mainSlice';
import navReducer from '@/app/_slices/nav/navSlice';
import productsReducer from '@/app/_slices/products/productsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      main: mainReducer,
      nav: navReducer,
      products: productsReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']