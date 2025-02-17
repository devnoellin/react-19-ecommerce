import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNavList } from "@/app/_apis/navService";

/**
 * 取得導覽列表
 */
export const getNavList = createAsyncThunk("nav/getNavList", async () => {
  const list = await fetchNavList();

  return list;
});