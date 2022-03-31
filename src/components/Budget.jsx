import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/AppContext'
import EditBudget from './EditBudget'
import ViewBudget from './ViewBudget'

const Bud = styled.div`
    width: 30%;
    margin: auto;
    height: 80%;
    background: azure;
    border-radius: 5px;
    color: #0a051d;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    justify-content: space-between;
    gap: 15%;
    align-items: center;
    padding: 2%;
`

function Budget() {
  const {budget, dispatch} = useContext(AppContext)
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    })
    setIsEditing(false)
  }
  return (
    <Bud>
        {
          isEditing ? (
          <EditBudget budget={budget} handleSaveClick={handleSaveClick}/>
          ) : (
          <ViewBudget handleEditClick={handleEditClick} budget={budget}/>
          )
        }
    </Bud>
  )
}

export default Budget