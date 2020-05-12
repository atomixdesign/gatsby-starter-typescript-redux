import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

const initialState = {
  value: 1,
}

type State = typeof initialState

const reducers = {
  increment: (state: State) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value += 1
  },
  decrement: (state: State) => {
    state.value -= 1
  },
  incrementByAmount: (state: State, action: PayloadAction<number>) => {
    state.value += action.payload
  },
}

export const counterSlice = createSlice<State, typeof reducers>({
  name: 'counter',
  initialState,
  reducers,
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export default counterSlice.reducer
