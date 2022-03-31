import { useState } from "react";
import styled from "styled-components";
import AddExpense from "./AddExpense";
import { AppProvider } from "./components/Context/AppContext";
import ExpenseList from "./components/ExpenseList";
import Nav from "./components/Nav";
import Params from "./Params";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 5%;
  position: relative;
  background: ${props => props.bg};
  color: ${props => props.cl};
  transition: all .3s linear;
`


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const switcher = () =>{
    setDarkMode(!darkMode)
  }
  return (
    <AppProvider>
      <Container className="App" bg={darkMode ? '#0a051d' : '#f0f8ff'} cl={darkMode ? '#f0f8ff' : '#0a051d'}>
        <Nav switcher ={switcher}/>
        <Params/>
        <ExpenseList/>
        <AddExpense/>
      </Container>
    </AppProvider>
  );
}

export default App;
