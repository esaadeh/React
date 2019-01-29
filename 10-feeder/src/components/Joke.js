import React from 'react';

function Joke(props) {
    console.log(props);
    return (
        <div>
           {/* If there is no punchline, change the font color of question */}
            <p style={{color: !props.punchline && "#888888"}}>Question: {props.question}</p>
             {/* conditional styling ternary: if props.punchline (truthy...exists) diplay: block otherwise display: none */}
            {/* Same as below it */}
            {/* <p style={{display: props.punchline ? "block" : "none"}}>Punchline: {props.punchline}</p> */}
            <p style={{display: !props.punchline && "none"}}>Punchline: {props.punchline}</p>

            <hr/>
        </div>
    )
}

export default Joke;
