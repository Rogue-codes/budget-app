import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/AppContext'
import Expenses from './Expenses'

const Ulist = styled.ul`
    width: 95%;
    margin: auto;
    margin-top: 3%;
    height: auto;
    padding: 2% 2%;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const Exp = styled.h1`
    text-align: center;
    font-size: 1.5vw;
`
function ExpenseList() {
    const {expense} = useContext(AppContext)
    
  return (
    <>
        <Exp>Expenses</Exp>
        <Ulist>
            {
                expense.map((item)=>(
                    <Expenses price={item.price} desc={item.desc} id={item.id} />
                ))
            }
        </Ulist>
    </>
  )
}

export default ExpenseList