import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/authSlice'
import activateReducer from "../slice/activateSlice"
export const store = configureStore({
  reducer: {
    authReducer,
    activateReducer
  },
})

