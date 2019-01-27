import React, { Component } from 'react';
import './App.css';
// import ToDo from './components/ToDo';
import ToDoItem from './components/ToDoItem';
import todosData from './todosData';


class App extends Component {
  render() {
    return (
      <div className="App">
       <ToDoItem />
       <ToDoItem />
       <ToDoItem />
       <ToDoItem />
      </div>
    );
  }
}

export default App;
