import './Country.css'
const Country = ({country}) => {

    const {name, flags, capital, population, area}= country
    console.log(country)
    return (
        <div className='body'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population} people</p>
        </div>
    );
};

export default Country;