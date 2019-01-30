import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "Bob",
      age: 2,
      isLoggedIn: true
    };
  };

  render() {

// Loging for in or out display
let wordDisplay;
if (this.state.isLoggedIn) {
  wordDisplay = "in";
} else {
  wordDisplay = "out";
}

    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>

{/* Displaying wordDisplay based on the isLoggedIn state */}
{/* props or this. is not needed cause its a local variable  */}
        <h1>Your are currently logged {wordDisplay}</h1>
      </div>
    );
  }
}

export default App;
