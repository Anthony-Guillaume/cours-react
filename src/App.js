import React from 'react';
import './App.css';
import {List} from "./components/List.js";

function App() 
{
  const list = React.createElement(List);
  return (
    <div className="App">
      {list};
    </div>
  );
}

export default App;
