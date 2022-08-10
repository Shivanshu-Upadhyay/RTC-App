import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/authSlice'
export const store = configureStore({
  reducer: {
    authReducer,
  },
})

