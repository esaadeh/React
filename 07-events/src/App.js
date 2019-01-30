import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';


function handleClick() {
  console.log("Click!");
}

// function handleMouseOver() {

// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo />
        {/* onMouseOver listener */}
        <img onMouseOver={() => console.log("Hover!")}
          src="https://www.fillmurray.com/200/100" alt="required?" />
        <br />
        <br />
        {/* onClick listner */}
        {/* <button onClick={function () { (console.log("clicked!")) }}>Click me</button> */}
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
