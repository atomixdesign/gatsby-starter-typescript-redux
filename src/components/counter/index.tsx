import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from 'features/counter'
import StyledRow from './styled-row'
import StyledButton from './styled-button'
import StyledValue from './styled-value'
import StyledTextbox from './styled-textbox'
import StyledAsyncButton from './styled-async-button'
import { RootState } from 'store'
import Image from 'components/image'

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <StyledRow>
        <StyledButton
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </StyledButton>
        <StyledValue>
          {count}
        </StyledValue>
        <StyledButton
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </StyledButton>
      </StyledRow>
      <StyledRow>
        <StyledTextbox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <StyledButton
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </StyledButton>
        <StyledAsyncButton
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </StyledAsyncButton>
      </StyledRow>
      <div style={{
        display: 'flex'
      }}>
        {new Array(count).fill(null).map((_, i) => <Image key={i} />)}
      </div>
    </div>
  )
}

export default Counter
