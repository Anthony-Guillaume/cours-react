import React from 'react';
import './App.css';
import {List} from "./components/List";
import {Button} from "./components/Button";
import {Form} from "./components/Form";

function App() 
{
  const list = <List elements={[1,2,3, 3]} />;
  const form = <Form placeholder={"Votre nom."} disabled={false}/>;
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
