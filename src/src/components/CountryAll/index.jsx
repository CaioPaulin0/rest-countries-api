import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Country from '../Country'
import './CountryAll.css'

const CountryAll = () => {

    const [countryDiv, setCountryDiv] = useState([])


     useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
           setCountryDiv(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className='countryAll'>
            {countryDiv.map(function(res){
                return <Country
                    key={res.name.common}
                    img={res.flags.png}
                    name={res.name.common}
                    population={res.population}
                    region={res.region}
                    capital={res.capital}
                    json={res}
                />
            })}
        </div>
    )
}

export default CountryAll