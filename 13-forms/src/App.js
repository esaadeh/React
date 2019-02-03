import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // Custom handleChange method to change state whenever the onChange is fired in the form below
  handleChange(event) {
    // When handlChange fires we gain access to the event object of the element that and event that fired it. We then use the data in that object to ascertain the elements current state and what it's next state should then be

    // taking that event object and accessing the target(that which fired the event: input box) and grabbig its name / value...if the key value pair is available...checkbox inuputs don't have "value" attributes
    // event.target.name: event.target.value,
    // lastName: "    "
    // firstName: "    "
    // value: "      "
    // type:  "       "
    // checked: "      "

    //for text based input boxes
    // [event.target.name]: event.target.value
    //or
    // grabbing value of event.target.firstName(key) : event.target.value(value)...same w lastName and setting or getting ".name": ."value"   esentially mapping over the event.target-object's selected key:value pairs
    // checkbox does not have a value type so that can't be used to alter checkbox's state
    // Mapping over event.target Object and setting a new object with above example data?
    const { name, value, type, checked } = event.target

    // Ternary: if (type === "checkbox") is true?  Execute block this block : Otherwise, execute this one
    // If the triggering element is a checkbox? Use this setState : Otherwise, use this one
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  handleSubmit () {
    
  }

  render() {

    return (
      // onSubmit listener to  handleSubmit method
      <form onSubmit={this.handleSubmit}>
        {/* onChange listener calling handleChange method whenever the text input box changes */}
        {/* event object is sent whenver onChange is fired at every character chane */}
        {/* value if above an beyond...to be sure that it's state that's directing whats being displayed to the user and not the other way around.  name is for the new event targeting in state above */}
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        {
          // Other useful form elements:

          // <textarea /> self-closing element  (can therefore use attributes/props such as value=)
          // <input type="checkbox" /> (has checked but no value attribute/property)
          // <input type="radio" />  (has both value and checked)
          // <select> with <option> elements
        }


        {/* textarea input box */}
        <textarea
          value={"Some default value"}
          // Nothing in handleChange for this...put it to silence a console log warning regarding text area?
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            // Setting the state of checked
            checked={this.state.isFriendly}
            // Name of corresponding state
            name="isFriendly"
            // onChange listener calling handleChange method
            onChange={this.handleChange}
          /> Is Friendly? Checkbox
        </label>
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
          />  Male (gender radio 1)
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female (gender radio 2)
        </label>
        <br />
        <label>Favorite Color:
          {/* select element input with it's corrosponding options input elements */}
          <select
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yelllow</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            {/* <select/> */}
          </select>
        </label>
        {/* Closing labe tags with text just above */}
        {/* Displaying the state.firstname */}
        {/* When state is updated via one of two text inputs, this output to the screen is also updated */}
        <h1>{this.state.firstName} {this.state.lastName}</h1>

        {/* When state is updated via a radio button, this output to the screen is also updated */}
        <h2>You are a {this.state.gender}</h2>

        <h2>Your favorite color is: {this.state.favColor}</h2>
        {/* Buttons WIITHIN A <form> fire an onSubmit automatically wthin the form*/}
        <button>Submit</button>
      </form>

      // Check Out Formik


    );
  }
}

export default App;
