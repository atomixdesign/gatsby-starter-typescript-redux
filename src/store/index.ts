import { configureStore } from '@reduxjs/toolkit'
import { default as counter } from 'features/counter'

export const store = configureStore({
  reducer: {
    counter,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store


