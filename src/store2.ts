import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducer'

export const store = configureStore({
  reducer: {
    ttodos: todosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store