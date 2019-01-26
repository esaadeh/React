import React, { Component } from 'react';
import './App.css';
import Joke from './components/Joke';
import Data from './Data';

class App extends Component {
  render() {
    // Mapping example of traversing through an array and executing the function on each individual item (num) and returning those valued onto another array
const nums = [1, 2, 3, 4, 5, 6, 7];
const doubled = nums.map(function(num) {
  return num * 2;
});
console.log(doubled);

    return (
      <div className="App">
      {/* Most data will be coming in as a json */}
        <Joke question="Q1" punchline="P1"/>
        <Joke question="Q2" punchline="P2"/>
        <Joke question="Q3" punchline="P3"/>
        <Joke question="Q4" punchline="P4"/>
        <Joke question="Q5" punchline="P5"/>
        <Joke question="NoPunch" />
      </div>
    );
  }
}

export default App;
