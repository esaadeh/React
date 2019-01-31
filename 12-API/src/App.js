import React, { Component } from 'react';


// Check Mozilla MDN docs on fetch
// swapi.com

class App extends Component {
  constructor() {
    super()
    // setting the todosData json into state as an array todos
    this.state = {
      // loading true/false
      loading: false,
      // setting it to an object becuause the data is coming in as an object
      character: {}
    }
  }

  componentDidMount() {
    // Test
    console.log("hi");

    // Before the API call, setting the loading state to true to show loading message until the loading is complete
    this.setState({ loading: true })
    // API call
    fetch("https://swapi.co/api/people/1")
      // handling promise? taking in response and converting to json
      .then(res => res.json())

      // test: taking that converted json and console.logging
      // .then(data => console.log(data))

      // setting the state of character to the entire json object
      // changeing loading state back to false
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      });

  }

  render() {
    // Diplay loading message if loading is true otherwise display loaded character.name
    const text = this.state.loading ? "loading...." : this.state.character.name;
    return (
      <div className="App">
        {/* Passing the value of name from the character object */}
        {/* {this.state.character.name} */}

        {/* Passing text ternary result from above */}
        <p>{text}</p>

      </div>
    );
  }
}

export default App;
