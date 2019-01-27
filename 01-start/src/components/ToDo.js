import React from "react";
import ToDoItem from "./ToDoItem";

function ToDo() {
    return (
        <div className="todo-list">
 {/* Below turned into a component ToDo.js */}
    {/* <input type="checkbox" />
        <p>checkbox Text</p>

        <input type="checkbox" />
        <p>checkbox Text</p>

        <input type="checkbox" />
        <p>checkbox Text</p>

        <input type="checkbox" />
        <p>checkbox Text</p> */}

            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default ToDo;