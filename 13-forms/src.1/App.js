import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // ***FIRST**** 
      // Set your state needs assumptions
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      // check boxes / radios?
      destination: "",
      // object of booleans/checkboxes with false/unchecked default
      isVegan: false,
      isKosher: false,
      isLacTard: false
    }
    // Bind handlechange
    this.handleChange = this.handleChange.bind(this);
  }

  // *****THIRD*****
  // handleChange(event)
  handleChange(event) {
    // Deconsruct object to extract necessary data 
    // const { name, value, type, checked } = event.target;
    // this.setState({
    const { name, value, type, checked } = event.target;
    type === "checkbox" ?
   
      this.setState({
          // name attributes and checked boolean
            [name]: checked
      })

      :

      this.setState({
        // Deconsruct object to extract necessary data 
        // const { name, value } = event.target;
        // name attributes and their values in event.target
        [name]: value
      })

  }

  // onSubmit listener to  handleSubmit method
  handleSubmit() {

  }

  render() {

    return (
      // ****SECOND*****
      // Set form inputs for data required and onChange/handleChange and values to get/set state


      <main>
        <form>
          {/* onChange listener calling handleChange method whenever the text input box changes */}
          {/* event object is sent whenver onChange is fired at every character chane */}
          {/* value if above an beyond...to be sure that it's state that's directing whats being displayed to the user and not the other way around.  name is for the new event targeting in state above */}
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <label>
            {/* Radio inputs are to meant to check  for one of a number of possible states, 2 in this case: male or female. Not whether a state is true or false, as in a checkbox */}
            {/* Linked/associated with common name="gender", therefore select one or the other and a check will appear only in the selected radio and setting value="male/female" */}
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />  Male
        </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>

          <br />

          {/* select element input with it's corrosponding options input elements */}
          <label>Destination:
          <select
              // value="CHANGES state of destination" from child below
              value={this.state.destination}
              // onChange sends event object to handleChange...and handleChange sets the state which triggers render()
              onChange={this.handleChange}
              // target
              name="destination"
            >
              {/* Top option direction to rid quirk/bug of choosing first option */}
              <option value="">>--Please Choose a Destination</option>
              {/* Chosen options's value="SETS value" of parent (containing <select/> element) */}
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>
              <option value="germany">Germany</option>
            </select>
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              // Need to drill into the state.dietaryRestricion object
              checked={this.state.isVegan}
            />Vegan?
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              // Need to drill into the state.dietaryRestricion object
              checked={this.state.isKosher}
            />Kosher?
          </label>   <label>
            <input
              type="checkbox"
              name="isLacTard"
              onChange={this.handleChange}
              // Need to drill into the state.dietaryRestricion object
              checked={this.state.isLacTard}
            />LacTard?
          </label>


          <br />
          <button>Submit</button>

        </form>
        <hr />
        <h1>Entered Information:</h1>


        {/* Closing labe tags with text just above */}
        {/* Displaying the state.firstName / lastName*/}
        {/* When state is updated via one of two text inputs, this output to the screen is also updated */}
        <p>Your name:{this.state.firstName} {this.state.lastName}</p>

        {/* Displaying the state.age */}
        {/* When state is updated via one of two text inputs, this output to the screen is also updated */}
        <p>Your age:{this.state.age}</p>

        {/* When state is updated via a radio button, this output to the screen is also updated */}
        <p>You gender: {this.state.gender}</p>
        <p>You destination: {this.state.destination}</p>

        <p>Your Dietary Restrictions:</p>
          <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
          <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
          <p>LacTard: {this.state.isLacTard ? "Yes" : "No"}</p>
        
      </main>
    );
  }
}

export default App;
