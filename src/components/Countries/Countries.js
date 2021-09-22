import React, {useEffect, useState} from 'react';
import Country from './Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div>
        <h1> Hi there : {countries.length} people</h1>
        {
            countries.map(country => <Country 
            country = {country}
           >
             </Country>)
        }
            
        </div>
    );
};

export default Countries;