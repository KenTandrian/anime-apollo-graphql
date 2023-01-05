import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {},
});

export const {} = HomePageSlice.actions;
export default HomePageSlice.reducer;
