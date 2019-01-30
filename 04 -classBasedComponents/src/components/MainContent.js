import React from 'react';

function MainContent() {
    const first = "bob";
    const last = "smith";
    const date = new Date();
    const hours = date.getHours();
    let timeDay;
    const styles = {
        fontSize: 30
    }

// Used to determine time of day and display a custom message with custom styling - font color
    if (hours < 12) {
        timeDay = "morning";
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeDay = "afternoon";
        styles.color = "#2E0927"
    } else {
        timeDay = "night";
        styles.color = "#D90000"
    }



    return (
        <div>
            {/* Props being attained from above */}
            <h1 style={styles}>Good {timeDay}</h1>
            <h2>{`${first} ${last}`}!</h2>
            <p>Blurb</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default MainContent;