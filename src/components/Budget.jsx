import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/AppContext'
import EditBudget from './EditBudget'
import ViewBudget from './ViewBudget'

const Bud = styled.div`
    @media (max-width:450px) {
      width: 95%;
      margin-bottom: 5%;
    }
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
  const {budget, dispatch} = useContext(AppContext) /* these are coming from our context API */
  const [isEditing, setIsEditing] = useState(false) /* to switch between EditBudget and viewBudget Components */

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value, /* value is a prop we'll be passing to our Editing budget component and it'll be sent to our context API to the replace the value of our budget */
    })
    setIsEditing(false)
  }
  return (
    <Bud>
        {
          isEditing ? (
          <EditBudget budget={budget} handleSaveClick={handleSaveClick}/> /* if isEditing is true, render the EditBudget component*/
          ) : (
          <ViewBudget handleEditClick={handleEditClick} budget={budget}/> /* if isEditing is false, render the ViewBudget component*/
          )
        }
    </Bud>
  )
}

export default Budget