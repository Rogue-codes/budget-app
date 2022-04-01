import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import styled from 'styled-components'
import { AppContext } from './Context/AppContext'

const List = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
    .del{
        cursor: pointer;
    }
`
const Spanner = styled.span`
  @media (max-width:450px) {
    width: 50%;
    justify-content: flex-end;
  }
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Price = styled.span`
    padding: 5%;
    background:blue;
    border-radius: 5px;
    color: white;
`

function Expenses({price,desc,id}) {
    const {dispatch} = useContext(AppContext)

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXEPENSE',
            payload: id,
        })
    }
  return (
    <List>
        {desc} 
        <Spanner>
           <Price>₦{price}</Price> 
            <TiDelete size='1.7rem' onClick={handleDelete} className='del'></TiDelete>        
        </Spanner>
    </List>
  )
}

export default Expenses