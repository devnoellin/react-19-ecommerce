import { createSlice } from "@reduxjs/toolkit";
import { MainState } from "./mainTypes";

const initialState: MainState = {
};

const userSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default userSlice.reducer;