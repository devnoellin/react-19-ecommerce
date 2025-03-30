import { createSlice } from "@reduxjs/toolkit";
import { initSite, getSiteConfig } from "./mainActions";
import { MainState } from "@/app/_modules/main/types/mainTypes";

const initialState: MainState = {
  init: false,
  error: false,
  siteConfig: {
    logo: '',
    currency: '',
    locales: [],
  },
};

const userSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initSite.rejected, (state) => {
      state.error = true;
    })
    builder.addCase(getSiteConfig.fulfilled, (state, { payload }) => {
      state.init = true;
      state.siteConfig = payload || [];
    })
  },
});

export default userSlice.reducer;