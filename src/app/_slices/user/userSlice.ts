import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "./userActions";
import { UserState } from "./userTypes";

const initialState: UserState = {
  userInfo: {},
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.status = "succeeded";
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;