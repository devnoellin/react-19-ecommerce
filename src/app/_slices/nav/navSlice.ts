import { createSlice } from '@reduxjs/toolkit';
import { getNavList } from './navActions';
import { NavState } from './navTypes';

const initialState: NavState = {
  navList: [],
};

// 📌 建立 Nav Slice
const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNavList.fulfilled, (state, action) => {
      state.navList = action.payload || [];
    })
  },
});

export default navSlice.reducer;