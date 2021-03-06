import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/AppContext'


const Exp = styled.div`
    @media (max-width:450px) {
      width: 95%;
      margin-bottom: 5%;
      height: 10vh;
    }
    width: 30%;
    margin: auto;
    height: 80%;
    background: gold;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    justify-content: space-between;
    gap: 15%;
    align-items: center;
    padding: 2%;
`
const Text = styled.h2`
  @media (max-width:450px) {
    font-size: 1rem;
  }
  font-size: 1.3vw;
`
const Price = styled.p`
  @media (max-width:450px) {
    font-size: 1rem;
  }
  font-size: 1.3vw;
`


function Expenditure() {
  const {expense} = useContext(AppContext)

  const total = expense.reduce((totall, item)=>{
    return (totall = totall += item.price) /* Sum of all the expenses */
  },0)
  return (
    <Exp>
        <Text>Current expenditure</Text>
        <Price>₦{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Price> 
    </Exp>
  )
}

export default Expenditure