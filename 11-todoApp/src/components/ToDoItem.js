import React from "react";

//Component of ToDo component

function ToDoItem(props) {
    // completed style object
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }


    return (
        <div className="todo-item">
            {/* Passing completedStyle object and passing it to attribute style which is an in-line styling attr */}
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>

            {/* Changing onChange prop value to recieve item id */}
            <input type="checkbox"
                checked={props.item.completed}
                // onChange={() => console.log("changed!")}/>
                onChange={() => props.handleChange(props.item.id)} />

        </div>
    )
}

export default ToDoItem;