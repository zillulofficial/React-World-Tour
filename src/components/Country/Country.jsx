import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {

    const [visited, setVisited]= useState(false)

    const handleVisit= () =>{
        setVisited(!visited)
    }

    const {name, flags, capital, population, area, cca3}= country
    return (
        <div className={`body ${visited? 'visited-style': ''}`}>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population} people</p>
            <p><small>code: {cca3}</small></p>
            <button className='btn' onClick={handleVisit}>{visited? 'Visited': 'Going to Visit'}</button>
            <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark as Visited</button>
        </div>
    );
};

export default Country;