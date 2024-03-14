import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountry]= useState([])
    const [visitedCountries, setVisitedCountries]= useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountry(data))
    } , [])

    const handleVisitedCountry= (country)=>{
        const newArray= [...visitedCountries, country]
        setVisitedCountries(newArray)
        console.log(country)
    }

    return (
        <div>
            <h3>No of Countries: {countries.length}</h3>
            <div>
                <h4>Countries Visited: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country=> <Country country={country} handleVisitedCountry={handleVisitedCountry} key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;