import React from 'react';

// In this way, components can maintain their own data and modify their own state 

class App extends React.Component {
  constructor() {
    super()
    // Should never try and modify the original state of state.  Use the setState method of React.Component
    this.state = {
      count: 0,
      tally: 0
    }
    // Binding handleClick() to this class (App)
    this.handleClick = this.handleClick.bind(this);
  }

  // Custom click handler method.  When using a method that uses setState, you must bind that method to the class (App in  this case)
  handleClick() {
    // test
    // console.log("Button Click!");

    // state is an object, so must pass setState and object
    // setting a "state" of {count: 1}...NOT setting state.count = 1;  Does not take into account current/previous state
    this.setState({ count: 1 })

    // takes into account current/previous state and passing it to a function that will return the new state to be set as an object
    this.setState((prevState) => {
      return {
        // Using ++ would try to modify the original state of the class. This way, we're setting a new state, not changing the original
        tally: prevState.tally + 1
      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* Rendering state to UI */}
        <h1>Count: {this.state.count}</h1>
        <h1>Tally: {this.state.tally}</h1>
        {/* Utilizing custom click handler from above */}
        {/* using this because the handleClick method is part of this Class (App) */}
        <button onClick={this.handleClick}>Change!</button>

        {/* Non-working example */}
        {/* Passing props...properties to <ChildComponent/> a child of class-component App  */}
        {/* Whenever React comes accross a component whose prop has changed state, it re-renders() that component */}
        {/* <ChildComponent count={this.state.count} /> */}
      </div>
    );
  }
}
export default App;
