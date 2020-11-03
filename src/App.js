import React from 'react';
import './App.css';
import {List} from "./components/List";
import {Button} from "./components/Button";

function App() 
{
  const list = <List elements={[1,2,3]} />;
  const button = <Button  value="Cliquez !"/>;
  return (
    <div className="App">
      {list}
      {button}
    </div>
  );
}

export default App;
