import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  profile_img: "",
};

const activateSlice = createSlice({
  name: "activateReducer",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setProfile: (state, action) => {
      state.profile_img = action.payload;
    },
  },
});

export const { setUserName, setProfile } = activateSlice.actions;
export default activateSlice.reducer;
