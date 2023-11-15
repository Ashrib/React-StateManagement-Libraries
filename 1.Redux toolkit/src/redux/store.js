import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './slices/count'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})