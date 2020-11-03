import React from 'react';
import './App.css';
import {List, ListHook} from "./components/List";
import {Button} from "./components/Button";

function App() 
{
  const list = <List elements={[1,2,3,3]} />;
  // {ListHook([1,2,3,4,5,6,7,8,9,10])}

  const button = <Button value="Cliquez !"/>;
  return (
    <div className="App">
      {list}
      {button}
    </div>
  );
}

export default App;
