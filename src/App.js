import React from 'react';
import './App.css';
import {List, ListHook} from "./components/List";
import {Button} from "./components/Button";
import {Form} from "./components/Form";

function App() 
{
  const list = <List elements={[1,2,3]} />;
  const form = <Form />;
  // {ListHook([1,2,3,4,5,6,7,8,9,10])}

  const button = <Button value="Cliquez !"/>;
  return (
    <div className="App">
      {list}
      {button}
      {form}
    </div>
  );
}

export default App;
