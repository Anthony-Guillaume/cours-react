import React from 'react';
import './App.css';
import {List} from "./components/List";
import {Button} from "./components/Button";
import {Form} from "./components/Form";

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {elements: ["1","2","3"]};
  }

  addElement = (element) => {
    const elements = Array.from(this.state.elements);
    elements.push(element);
    this.setState({elements});
  }

  removeElement = (element) => {
    const indexOfElement = this.state.elements.indexOf(element)
    if (indexOfElement !== -1)
    {
      const elements = Array.from(this.state.elements);
      elements.splice(indexOfElement, 1);
      this.setState({elements});
    }
  }

  onFormSubmit = (inputValue) => {
    this.addElement(inputValue);
    console.log(inputValue);
  }

  render()
  {
    const list = <List elements={this.state.elements} />;
    const form = <Form handleSubmitValue={this.onFormSubmit} placeholder={"Votre nom."} disabled={false}/>;
    const button = <Button value="Cliquez !"/>;
    return (
        <div className="App-header">
          {list}
          {button}
          {form}
        </div>
    );
  }
}

export default App;
