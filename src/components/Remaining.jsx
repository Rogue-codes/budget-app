import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/AppContext'

const Rem = styled.div`
  width: 30%;
  margin: auto;
  height: 80%;
  background: ${props => props.bg};
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: space-between;
  gap: 15%;
  align-items: center;
  padding: 2%;
`

const Text = styled.h2`
  font-size: 1.3vw;
`
const Price = styled.p`
  font-size: 1.3vw;  
`
function Remaining() {
  const {expense, budget} = useContext(AppContext)

  const total = expense.reduce((totall, item)=>{
   return  (totall= totall + item.price)
  },0)
  
  const rem = budget-total




  return (

    <Rem bg={rem <= 0 ? 'red' : 'lightgreen'}>
        <Text>Remaining</Text>
        <Price>₦{rem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Price> 
    </Rem>
  )
}

export default Remaining