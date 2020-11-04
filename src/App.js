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
    this.state = {elements: ["1","2","3"], date: new Date()};
  }

  addElement = (element) => {
    const elements = Array.from(this.state.elements);
    elements.push(element);
    this.setState({elements});
    this.updateDate();
  }

  removeElement = (element) => {
    const indexOfElement = this.state.elements.indexOf(element)
    if (indexOfElement !== -1)
    {
      const elements = Array.from(this.state.elements);
      elements.splice(indexOfElement, 1);
      this.setState({elements});
      this.updateDate();
    }
  }

  updateDate = () => {
    const date = new Date();
    this.setState({date});
  }

  getDate = () => {
    const date = this.state.date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let dayOfTheMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    console.log(hours + ":" + minutes + " " + dayOfTheMonth + "/" + month + "/" + year);
    return (hours + ":" + minutes + " " + dayOfTheMonth + "/" + month + "/" + year).toString()
  }

  onFormSubmit = (inputValue) => {
    this.addElement(inputValue);
    console.log(inputValue);
  }

  render()
  {
    const list = <List elements={this.state.elements} onClick={this.removeElement} />;
    const form = <Form handleSubmitValue={this.onFormSubmit} placeholder={"Votre nom."} disabled={false}/>;
    const button = <Button value="Cliquez !"/>;
    const lastChangeToListDate = <label> {this.getDate()} : </label>;
    return (
        <div className="App-header">
          {list}
          {button}
          {form}
          {lastChangeToListDate}
        </div>
    );
  }
}

export default App;
