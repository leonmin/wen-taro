import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter'

const middlewares = [
  ...getDefaultMiddleware<any>()
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(
    require('redux-logger').createLogger()
  )
}

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: middlewares
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<String>>