import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountry]= useState([])
    const [visitedCountries, setVisitedCountries]= useState([])
    const [visitedFlags, setVisitedFlags]= useState([])

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

    const handleVisitedFlag= (flag)=>{
        const newFlag= [...visitedFlags, flag]
        setVisitedFlags(newFlag)
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
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country=> <Country country={country} 
                    handleVisitedCountry={handleVisitedCountry} 
                    handleVisitedFlag= {handleVisitedFlag}
                    key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;