import { createSlice } from "@reduxjs/toolkit";
import { getSiteConfig } from './mainActions';
import { MainState } from "./mainTypes";

const initialState: MainState = {
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
    builder.addCase(getSiteConfig.fulfilled, (state, action) => {
      state.siteConfig = action.payload || [];
    })
  },
});

export default userSlice.reducer;