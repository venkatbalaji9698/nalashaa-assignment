import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storyList: [],
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setStoryData: (state, action) => {
      state.storyList = action.payload;
    },
  },
});

export const { setStoryData } = storySlice.actions;

export default storySlice.reducer;
