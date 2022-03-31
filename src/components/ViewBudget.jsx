import React from 'react'
import styled from 'styled-components'

const Bud = styled.div`
    width: 30%;
    height: 80%;
    background: azure;
    display: flex;
    justify-content: space-between;
    gap: 55%;
    align-items: center;
    padding: 2%;
`
const Text = styled.h2`
    font-size: 1.3vw;
`
const Price = styled.p`
    font-size: 1.3vw;
`
const Btn = styled.button`
    padding: 2% 12%;
    border: none;
    border-radius: 5px;
    font-size: 1vw;
    background: blue;
    cursor: pointer;
    color:#f8f8ff;
`
function ViewBudget({budget, handleEditClick}) {
  return (
    <Bud>
        <Text>Budget:</Text>
        <Price>₦{budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Price>
        <Btn onClick={handleEditClick} >Edit</Btn>
    </Bud>
  )
}

export default ViewBudget