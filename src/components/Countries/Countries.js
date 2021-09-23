import React, {useEffect, useState} from 'react';
import Country from './Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div >
        <h1> Hi there : {countries.length} people</h1>
        <div className="countries-container"> 
         {
            countries.map(country => <Country 
            key ={country.id}
            country = {country}
           >
             </Country>)
        }
        </div>
      
            
        </div>
    );
};

export default Countries;