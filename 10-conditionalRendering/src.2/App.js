import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    // setting state to not logged in
    this.state = {
      isLoggedIn: false
    }
    // binding click handler?
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // test
    console.log("Click!");

    // taking current/previous state and !'ing it...reversing it on button click
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    // Ternary checking if logged in, render Log out else log in
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";

    return (
      <div className="App">

        {/* onClick listener calling handleClick */}

        {/* <button onClick={this.handleClick}>Log In</button> */}

        {/* Rendering ternary  */}
        <button onClick={this.handleClick}>{buttonText}</button>

      </div>
    );
  }
}

export default App;
