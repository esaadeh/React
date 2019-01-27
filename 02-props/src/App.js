import React, { Component } from 'react';
import './App.css';
import Joke from './components/Joke';
import jokesData from './jokesData';
import Product from './components/Product';
import productsData from './productsData';

class App extends Component {

  render() {

    // Mapping example of traversing through an array and executing the function on each individual item (num) and returning those valued onto another array
    // const nums = [1, 2, 3, 4, 5, 6, 7];
    // const doubled = nums.map(function(num) {
    //   return num * 2;
    // });
    // console.log(doubled);


    // jokeComponents will hold an array of Joke component objects
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />);

    // productComponents will hold array of Product component objects
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />);

    return (
      <div className="App">
        {/* Most data will be coming in as a json */}
        {/* <Joke question="Q1" punchline="P1"/>
        <Joke question="Q2" punchline="P2"/>
        <Joke question="Q3" punchline="P3"/>
        <Joke question="Q4" punchline="P4"/>
        <Joke question="NoPunch" /> */}

        {jokeComponents}
        {productComponents}

      </div>
    );
  }
}

export default App;
