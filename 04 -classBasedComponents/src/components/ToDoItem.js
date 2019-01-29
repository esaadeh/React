import React from "react";
// import "/ToDoItem.css"


//Component of ToDo component

// function ToDoItem() {

// Passing props to the above, below
    function ToDoItem(props) {
    return (
        <div className="todo-item">

            {/* <p>checkbox Text</p> */}
            
            {/* Replacing above with below to retrieve props data for display rather than above: diplaying the text key in props which is json: PROPS IS PASSING ITEM object AND ITEM CONTAINS TEXT key (props.item.text: "this.stuff") of the id map */}

            <p>{props.item.text}</p>

            {/* <input type="checkbox" /> */}

            {/* Above is being modified to access the checkbox's checked attribute to display a check if the json item object has true for key completed */}
            {/* Note: There is no hanldler to uncheck the boxes at the moment just hard coding */}

            <input type="checkbox" checked={props.item.completed}/>


        </div>
    )
}

export default ToDoItem;