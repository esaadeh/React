import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // Custom handleChange method to change state whenever the onChange is fired in the form below
  handleChange(event) {
    // this.setState({
    // taking that event object and accessing the target(that which fired the event: input box) and grabbig its value
    // firstName: event.target.value,
    // lastName: event.target.value

    //for text based input boxes
    // [event.target.name]: event.target.value
    //or
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <form>
        {/* onChange listener calling handleChange method whenever the text input box changes */}
        {/* event object is sent whenver onChange is fired at every character chane */}
        {/* value if above an beyond...to be sure that it's state that's directing whats being displayed to the user and not the other way around.  name is for the new event targeting in state above */}
        <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
        {/* Displaying the state.firstname */}
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    );
  }
}

export default App;
