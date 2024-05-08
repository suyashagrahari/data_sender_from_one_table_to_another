import { configureStore } from '@reduxjs/toolkit'
import leftNameReducer from "./slice/leftName"
import rightNameReducer from './slice/rightName'

export const store = configureStore({
  reducer: {
    leftName: leftNameReducer,
    rightName: rightNameReducer,
  },
})