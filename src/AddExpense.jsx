import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from './components/Context/AppContext'
import {v4 as uuidv4} from 'uuid'
const Add = styled.div`
    width: 95%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    height: auto;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    form{
        width: 100%;
        margin: auto;
        padding: 4%;
        input{
            @media (max-width:450px) {
                width: 100%;
            }
            width: 60%;
            display: block;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            height: 7vh;
            margin-top: 2%;
            margin-bottom: 2%;
            padding-left: 3%;
            border-radius: 5px;
            border: none;
            &:focus{
                outline: none;
            }
        }
        button{
            @media (max-width:450px) {
                font-size: 1.2rem;
                margin-top: 6%;
                height: 6vh;
                width: 40%;
            }
            width: 20%;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            cursor: pointer;
            height: 8vh;
            font-size: 1.3vw;
            border: none;
            border-radius: 5px;
            background: lightgreen;
            transition: all .2s linear;
            &:hover{
                background: #3dcf3d;
            }
        }
    }
`

function AddExpense() {
    const {dispatch} = useContext(AppContext)  /*this will send our state and action to the Context API*/
    const [desc, setDesc] = useState('') 
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setDesc('')

        setPrice('')
        // we are sending this object to our Expense reducer
        const expense = {
            id: uuidv4,
            desc: desc,
            price: parseInt(price)
        }

        dispatch({
            type: 'ADDEXPENSE',
            payload:expense,
        })
    }

  return (
    <Add>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} required />

            <label htmlFor="">Amount</label>
            <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} required />

            <button>Add</button>

        </form>
    </Add>
  )
}

export default AddExpense