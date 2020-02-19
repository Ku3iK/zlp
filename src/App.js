import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MainPage from './pages/MainPage';
import {createGlobalStyle} from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Switch>
        <Route path='/'>
          <MainPage/>
        </Route>
        <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  html {
    font-size: 15px;
  }
  a {
    color: black;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`