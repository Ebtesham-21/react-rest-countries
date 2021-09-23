import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, email, body} = props.country; 
    console.log(props.country);

    return (
        <div className = "country">
        <h4> This is: {name}</h4>
        <p className = "mail"> Email : {email} Comment : {body}</p>
        </div>
    );
};

export default Country;