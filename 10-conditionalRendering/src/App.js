import React, { Component } from 'react';
import Conditional from "./components/Conditional";


class App extends Component {
  constructor() {
    super()
    // state being used to check if API call is complete
    this.state = {
      isLoading: true
    }
  }
 
  // Pretending that the data load will take 1.5 secs as in API call
  componentDidMount() {
   setTimeout(() => {
     this.setState ({
       isLoading: false
     })
   }, 1500)
  }

  render() {
    return (
      <div className="App">
      {/* isLoading is prop being sent to Conditional component .js */}
      {/* If it changes as in when the state changes, this component will be rerendered */}


{/* Commented out second option of handling conditional here and in Conditional.js */}
      {/* {this.state.isLoading === true ? */}
      {/* <h1>Loading...</h1> :  */}
      <Conditional isLoading={this.state.isLoading} />
      {/* } */}
      </div>
    );
  }
}

export default App;
