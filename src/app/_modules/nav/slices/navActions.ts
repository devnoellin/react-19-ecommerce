import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNavList } from "./navService";

/**
 * 取得導覽列表
 */
export const getNavList = createAsyncThunk("nav/getNavList", async () => {
  const list = await fetchNavList();

  return list;
});
