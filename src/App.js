import React from 'react';
import './App.css';
import {List} from "./components/List.js";
import {Button} from "./components/Button.js";

function App() 
{
  const list = React.createElement(List);
  const button = React.createElement(Button);
  return (
    <div className="App">
      {list}
      {button}
    </div>
  );
}

export default App;
