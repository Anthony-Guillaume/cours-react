import React from 'react';
import './App.css';
import {List} from "./components/List";
import {Button} from "./components/Button";

function App() 
{
  const list = React.createElement(List);
  const button = <Button  value="Cliquez !"/>;
  return (
    <div className="App">
      {list}
      {button}
    </div>
  );
}

export default App;
