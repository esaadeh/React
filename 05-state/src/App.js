import React from 'react';

// To use state, you must be in a Class based component
// And you must use the constructor method and super and make a call to the global function called super()

class App extends React.Component {
  constructor() {
    // super() needed to acces methods of React.Component?
    super()
    // state is always an object
    // values are what state is set to when initialized but can be changed afterwards...props cannot be changed
    // state can be passed from this compoenet to a child component through props
    this.state = {
      answer: "Yes"
    };
  };

  render() {

    return (
      <div className="App">

        {/* this.state.answer from state */}
        <h1> Is state important to know? {this.state.answer}</h1>

        {/* state being passed to a child compoenet via props */}
        {/* <ChildComponent answer={this.state.answer} /> */}

      </div>
    );
  }
}

export default App;
