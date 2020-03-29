import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../store/index'

const initialState = {
  value: 0
}
export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = slice.actions

export const incrementAsync = (mount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(mount))
  }, 1000);
}

export const selectCount = (state: RootState) => state.counter.value

export default slice.reducer