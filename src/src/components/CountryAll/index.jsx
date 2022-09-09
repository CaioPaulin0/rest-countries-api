import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Country from '../Country'
import SearchCountry from '../SearchCountry'
import './CountryAll.css'

const CountryAll = () => {

    const [countryDiv, setCountryDiv] = useState([])
    const [filter, setFilter] = useState('Americas')
    const [searchInput, setSearchInput] = useState('')

    const noCountries = countryDiv.status || countryDiv.message

     useEffect(() => {

    if(searchInput === ''){
        fetch(`https://restcountries.com/v3.1/region/${filter}`)
        .then(response => response.json())
        .then(data => {
           setCountryDiv(data)   
        })
        .catch((error) => {
            console.log(error)
        })
    }

    else{
        fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
        .then(response => response.json())
        .then(data => {
           setCountryDiv(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    }, [filter, searchInput])

    return (
        <>
        <SearchCountry 
        filter={(e) => setFilter(e.target.value)
        }
        search={(e) => setSearchInput(e.target.value)}
        />
        <div className='countryAll'>
           {!noCountries ? (
             countryDiv.map(function(res){
                return <Country
                    key={res.name.common}
                    img={res.flags.png}
                    name={res.name.common}
                    population={res.population}
                    region={res.region}
                    capital={res.capital}
                    json={res}
                />
            })
           ) : (
            <p className='notFound'> Not Found </p>
           )}
        </div>
        </>
    )
}

export default CountryAll