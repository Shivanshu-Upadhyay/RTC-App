import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
  otp: {
    phone: "",
    hash: "",
  },
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload
      state.isAuth=true
    },
    setOtp: (state, action) => {
      const { phone, hash } = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
  },
});

export const { setAuth, setOtp } = authSlice.actions;
export default authSlice.reducer;
