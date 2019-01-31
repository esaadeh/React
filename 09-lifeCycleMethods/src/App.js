import React, { Component } from 'react';
import './App.css';
// import ToDo from './components/ToDo';
import ToDoItem from "./components/ToDoItem";
import todosData from './components/todosData';


class App extends Component {
  constructor() {
    super()
    // setting the todosData json into state as an array todos
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // Custom change handler for checkbox check being passed the id of the json object associated with checkbox
  handleChange(id) {

    // Test
    // console.log("Change!", id);

    // Need to alter state of todos, which is an array by passing a new state...therefore a new array
    this.setState(prevState => {
      // map over prevState.todos and find match of clicked id and set its completed value to the opposite of what it currently is (flip-it)
      const updateToDos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        // set the modified todo into the updateToDos array?
        return todo;
      })
      // return the new state object
      return {
        todos: updateToDos
      }
    })

  }

  // Lifecycle method of "birth".  This method will only run once...when the component is FIRST rendered to the screen. 
  componentDidMount() {
    // API initial calls for initial display
  }

componentWillUnmount() {
  // Cleanup
}

  render() {

    // Adding a prop of handleChange and setting it equal to this.handleChange
    const toDoItemArray = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="App">
        {/* <ToDo /> */}
        {toDoItemArray}
      </div>
    );
  }
}

export default App;
