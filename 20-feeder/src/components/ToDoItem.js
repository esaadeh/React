import React from "react";

//Component of ToDo component

    function ToDoItem(props) {
    return (
        <div className="todo-item">

            <p>{props.item.text}</p>
            
            {/* onChange listener added to check box to alert whenever the checkbox is activated */}
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => console.log("changed!")}/>


        </div>
    )
}

export default ToDoItem;