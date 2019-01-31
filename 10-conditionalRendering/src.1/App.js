import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    // state being used to check if API call is complete
    this.state = {
      unreadMessages: [
        "Message one",
        "Message two"
      ]
    }
  }

  // &&  used in conditionals to check truthiness of both sides of an if statement   if(a && b)
  // What's actually happening is if a is true, the code just sends back b. This is because b is the deciding factor. But, if a is false, it returns false. This is bacause there's no need to check b.

  render() {
    return (
      <div className="App">
        {/* <h2>You have {this.state.unreadMessages.length} unread messages.</h2> */}

        {/* {
          this.state.unreadMessages.length > 0 ?
            <h2>You have {this.state.unreadMessages.length} unread messages.</h2> :
            null
        } */}

        {
          this.state.unreadMessages.length > 0 &&
            <h2>You have {this.state.unreadMessages.length} unread messages.</h2>
        }

      </div>
    );
  }
}

export default App;
