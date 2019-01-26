import React from 'react';

//props passes a props object with each <ContactCard /> in App.js  See Below
function ContactCard(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}


export default ContactCard;

// props objects being passed with each Card
// {
// imgUrl: "http://placekitten.com/300/200"
// email: "mr.whiskaz@catnap.meow"
// name: "Mr. Whiskerson"
// phone: "(212) 555-1234"
// }

// {
// imgUrl: "http://placekitten.com/400/200"
// email: "mr.two@catnap.meow"
// name: "Mr. Two"
// phone: "(212) 555-1235"
// }

// {
// imgUrl: "http://placekitten.com/400/300"
// email: "mr.three@catnap.meow"
// name: "Mr. Three"
// phone: "(212) 555-1236"
// }

// {
// imgUrl: "http://placekitten.com/200/100"
// email: "mr.four@catnap.meow"
// name: "Mr. Four"
// phone: "(212) 555-1237"
// }