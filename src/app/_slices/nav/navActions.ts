import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNavList } from "@/app/_apis/navService";

export const getNavList = createAsyncThunk("nav/getNavList", async () => {
  const list = await fetchNavList();

  return list;
});