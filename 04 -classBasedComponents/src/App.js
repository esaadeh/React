import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';
// Joke component
import Joke from './components/Joke';
// Jokes json data
import jokesData from './jokesData';
// Product component
import Product from './components/Product';
// Products json data
import productsData from './productsData';
import MainContent from './components/MainContent';

// Function based component

// function App() {
//   return (
//     <div className="App">
//       <ToDo />
//     </div>
//   )
// }


// Class based App Component
// insted of App(){};  We're extending React.Component (import above and below) which is setting up a prototype with React.Component{} rather than function(){}. This allows us to access properties and methods React.Component

class App extends Component {
  // Every class based component needs at a minimun the render() method. 

  // Can also create your own class methods (functions) to perform logic here
  // yourMethodHere() {
  //display logic here
  // }

  render() {

    // All display logic / style / conditional is placed within the render(), but before the return. Which included calling yourMethodHere();

    // this.yourMethodHere();
    // or
    // const style = this.yourMethodHere();


   // jokeComponents will hold an array of Joke component objects
   const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />);

    // productComponents will hold array of Product component objects
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />);

    return (
      <div className="App">
        <ToDo />

        {/* To use props in a class based component, you need to use this.props.whatever */}
        {/* <h1>{this.props.item}</h1> */}

        {jokeComponents}
        {productComponents}

        <MainContent />

      </div>
    );
  }
}


// App is being exported to index.js and being rendered via: ReactDOM.render(<App />, document.getElementById('root'));
export default App;
