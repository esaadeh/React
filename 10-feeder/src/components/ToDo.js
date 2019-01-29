import React from "react";
import ToDoItem from "./ToDoItem";
import todosData from './todosData';

function ToDo() {

    // toDoItemArray that will hold the todos json data from todosData.js. To do so, mapping over every (item) in json and passing every (item) key:value. Doing that by mapping over todosData(json file) and adding each item as props to <ToDoItem />       key is for console warning

    // Going from an array of objects above to an array of toDoItem below

    const toDoItemArray = todosData.map(item => <ToDoItem key={item.id} item={item} />)

    return (
        <div className="todo-list">

            {/* <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem /> */}

            {/* Replacing the list ToDoItem components above with the toDoItemArray array from above that. Passing it as React {}...like in hbs it with  */}

            {toDoItemArray}

            {/* Need to retrieve that item props data in the ToDoItem componenet */}
        </div>
    )
}

export default ToDo;