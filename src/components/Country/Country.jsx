import './Country.css'
const Country = ({country}) => {

    const {name, flags}= country
    console.log(country)
    return (
        <div className='body'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;