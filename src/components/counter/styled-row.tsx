import styled from 'styled-components'

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export default StyledRow
