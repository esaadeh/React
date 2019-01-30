import React from "react";
import ToDoItem from "./ToDoItem";
import todosData from './todosData';

// function ToDo() {
class ToDo extends React.Component {
    constructor() {
        super()
        // setting the todosData jsoon into state as an array todos
        this.state = {
            todos: todosData
        }
    }

    render() {

        // Mapping over todos array from state and to set attributes
        const toDoItemArray = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)

        return (
            <div className="todo-list">

                {toDoItemArray}

            </div>
        )
    }
}
export default ToDo;