import React from 'react';
import './Country.css'
import {Link} from "react-router-dom"
const Country = ({img,name,population,region,capital,json}) => {

  function click(){
        const objData =  {

            img: json.flags.png,
            name: json.name.common,
            nativeName: json.name.nativeName,
            population: json.population,
            region: json.region,
            subRegion: json.subregion,
            capital: json.capital,
            topLevelDomain: json.tld,
            currencies: json.currencies,
            languagues : json.languages,
            borderCountries: json.borders
        }
        localStorage.setItem('country', JSON.stringify(objData))
    }


        return (
            <Link to="/SelectCountry" className='linkStyle'>
            <div 
            onClick={click}  
            className="country" 
            key={name} 
            date-country={region}
            date-name={name}
            >
            <img src={img} alt={name} />
            <div className='countryInfo'>
                <strong>{name}</strong>
                <ul>
                    <li>
                        <p>Population:</p>
                        <span>{population}</span>
                    </li>
                    <li>
                        <p>Region:</p>
                        <span>{region}</span>
                    </li>
                    <li>
                        <p>Capital:</p>
                        <span>{capital}</span>
                    </li>
                </ul>
            </div>
        </div>
        </Link>
    )
}

export default Country