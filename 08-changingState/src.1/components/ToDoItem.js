import React from "react";

//Component of ToDo component

function ToDoItem(props) {
    return (
        <div className="todo-item">

            <p>{props.item.text}</p>

            {/* Changing onChange prop value to recieve item id */}
            <input type="checkbox"
                checked={props.item.completed}
                // onChange={() => console.log("changed!")}/>
                onChange={() => props.handleChange(props.item.id)} />

        </div>
    )
}

export default ToDoItem;