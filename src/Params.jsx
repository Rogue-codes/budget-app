import styled from 'styled-components'
import Budget from './components/Budget'
import Expenditure from './components/Expenditure'
import Remaining from './components/Remaining'

const Param = styled.div`
    @media (max-width:450px) {
      flex-direction: column;
      height: auto;
    }
    width: 100%;
    height: 30vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2%;
`

function Params() {
  return (
    // this houses the Budget, Remaining, and Expenditure components
    <Param>
        <Budget />
        <Remaining />
        <Expenditure />
    </Param>
  )
}

export default Params