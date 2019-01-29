import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';
// import ToDoItem from './components/ToDoItem';
// import ToDo from './components/ToDo';

// Class based App Component
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <ToDoItem />
       <ToDoItem />
       <ToDoItem />
       <ToDoItem /> */}

       {/* Replacing the list of toDoItem componenet above with the ToDo componenet */}
       
       <ToDo />

      </div>
    );
  }
}

export default App;
