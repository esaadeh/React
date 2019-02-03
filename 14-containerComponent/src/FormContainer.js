import React, { Component } from 'react';
import FormComponent from './FormComponent';

class Form extends Component {

  // Business Logic - maintain state (smart component - Container)

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLacTard: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // Business Logic - Update state

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })

      :

      this.setState({
        [name]: value
      })

  }
  // UI logic - Presentational Component (dumb component - component) goes to <FormComponent /> and it is rendered here
  render() {
    return (
      <div>
        <FormComponent 
        // handleChange prop is set on the FormComponent
        handleChange = {this.handleChange}
        // Setting a prop stateData that passes the entire state object as a state
        stateData={this.state}
        // Setting it this way allows you to remove stateData in form component and just hit props.whatever 
        // {...this.state}
        />
       
      </div>
    )
  }
}
export default Form;
