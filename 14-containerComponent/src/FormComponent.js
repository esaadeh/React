import React from 'react';

// UI Component of Form


//  Functional components don't have "this" or "state" so no this.state
// The same functionality is handled through the passing of props (properties / attributes)
// In FormContainer.js the entire state object is being passed via props as stateData
// All instances of this.state are replaced with props.stateData


// props is receiving a prop named handleChange which calls the method handleChange() ?
// All instances of this.handleChange need to be replaced with props.handleChange
function FormComponent(props) {
    return (
        <main>
          <form>
            {/* onChange listener calling handleChange method whenever the text input box changes */}
            {/* event object is sent whenver onChange is fired at every character chane */}
            {/* value if above an beyond...to be sure that it's state that's directing whats being displayed to the user and not the other way around.  name is for the new event targeting in state above */}
            <input
              name="firstName"
              value={props.stateData.firstName}
              onChange={props.handleChange}
              placeholder="First Name"
            />
            <br />
            <input
              name="lastName"
              value={props.stateData.lastName}
              onChange={props.handleChange}
              placeholder="Last Name"
            />
            <br />
            <input
              name="age"
              value={props.stateData.age}
              onChange={props.handleChange}
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
                checked={props.stateData.gender === "male"}
                onChange={props.handleChange}
              />  Male
          </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={props.stateData.gender === "female"}
                onChange={props.handleChange}
              /> Female
            </label>
  
            <br />
  
            {/* select element input with it's corrosponding options input elements */}
            <label>Destination:
            <select
                // value="CHANGES state of destination" from child below
                value={props.stateData.destination}
                // onChange sends event object to handleChange...and handleChange sets the state which triggers render()
                onChange={props.handleChange}
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
                onChange={props.handleChange}
                // Need to drill into the state.dietaryRestricion object
                checked={props.stateData.isVegan}
              />Vegan?
            </label>
            <label>
              <input
                type="checkbox"
                name="isKosher"
                onChange={props.handleChange}
                // Need to drill into the state.dietaryRestricion object
                checked={props.stateData.isKosher}
              />Kosher?
            </label>   <label>
              <input
                type="checkbox"
                name="isLacTard"
                onChange={props.handleChange}
                // Need to drill into the state.dietaryRestricion object
                checked={props.stateData.isLacTard}
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
          <p>Your name:{props.stateData.firstName} {props.stateData.lastName}</p>
  
          {/* Displaying the state.age */}
          {/* When state is updated via one of two text inputs, this output to the screen is also updated */}
          <p>Your age:{props.stateData.age}</p>
  
          {/* When state is updated via a radio button, this output to the screen is also updated */}
          <p>You gender: {props.stateData.gender}</p>
          <p>You destination: {props.stateData.destination}</p>
  
          <p>Your Dietary Restrictions:</p>
            <p>Vegan: {props.stateData.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.stateData.isKosher ? "Yes" : "No"}</p>
            <p>LacTard: {props.stateData.isLacTard ? "Yes" : "No"}</p>
          
        </main>
      );
    }

export default FormComponent