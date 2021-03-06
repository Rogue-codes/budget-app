import React, { createContext, useReducer } from 'react'


const AppReducer = (state,action) => {
  switch(action.type){
    case 'ADDEXPENSE':
      return{
        ...state,
        expense: [...state.expense, action.payload]
      }

      case 'DELETE_EXEPENSE': 
        return {
          ...state,
          expense: state.expense.filter(
            (expenses) => expenses.id !== action.payload
          ),
        };

      case 'SET_BUDGET':
      return{
        ...state,
        budget: action.payload,
      }

    default:
      return state
  }

}

const initailState = {
  budget:0,
  expense:[

  ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initailState)
  return(
    <AppContext.Provider value={{
      budget : state.budget,
      expense:state.expense,
      dispatch,
    }} >
      {props.children}
    </AppContext.Provider>
  )
}

