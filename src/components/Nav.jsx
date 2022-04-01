import React from 'react'
import styled from 'styled-components'
import {BsFillMoonFill} from 'react-icons/bs'
const Navigate = styled.nav`
    width: 100%;
    height: 15vh;
    background: transparent;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    margin-bottom: 5%;
`
const H = styled.h1`
    @media (max-width:450px) {
      font-size: 1.3rem;
    }
    font-size: 1.4vw;
`
const Btn = styled.button`
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
`

function Nav({switcher}) { /* switcher is a prop coming from our APP.js component */
  return (
    <Navigate>
        <H>PLANNER</H>
        <Btn onClick={switcher}><BsFillMoonFill></BsFillMoonFill></Btn> 
    </Navigate>
  )
}

export default Nav