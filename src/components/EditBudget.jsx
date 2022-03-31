import React, { useState } from 'react'
import styled from 'styled-components'
const Cont = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20%;
    align-items: center;
    input{
        height: 6vh;
        border: 1px solid #000;
        border-radius: 5px;
        padding-left: 2%;
        &:focus{
            outline: none;
        }
    }
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

function EditBudget({budget,handleSaveClick}) {
    const [value, setValue] = useState(budget)
  return (
    <Cont>
        <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} required/>
        <Btn type='button' onClick={() => handleSaveClick(value)}>save</Btn>
    </Cont>
  )
}

export default EditBudget