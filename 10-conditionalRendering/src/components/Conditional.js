import React from 'react';

// Conditional rendering: Loading something to the screen only when its state is true.



// Props is being passed isLoading from App component
function Conditional(props) {
    //test
    console.log(props.isLoading);

    // if(props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //       return (
    //         <h1>Done Loading...</h1>
    //     )
    // }

    return (
        <div>
            <h1>Navbar</h1>

            {/* Ternary:  codition ? statement if true : statement if false */}
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Done Loading...</h1>}

            {/* Second option is to do the conditional in App */}
            {/* <h1>Done Loading...</h1> */}

            <h1>Footer</h1>
        </div>
    )
}
export default Conditional;