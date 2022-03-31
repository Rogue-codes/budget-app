import styled from 'styled-components'
import Budget from './components/Budget'
import Expenditure from './components/Expenditure'
import Remaining from './components/Remaining'

const Param = styled.div`
    width: 100%;
    height: 30vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2%;
`

function Params() {
  return (
    <Param>
        <Budget />
        <Remaining />
        <Expenditure />
    </Param>
  )
}

export default Params