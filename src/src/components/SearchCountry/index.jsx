import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './SearchCountry.css'
const SearchCountry = () => {

    const [filter, setFilter] = useState('none')

    useEffect(() => {
         const dataCountry = document.querySelectorAll(`[date-country=${filter}]`)
         const country = [...dataCountry]
         country.map((res) => {
          return  res.classList.toggle('toggle')
         })     

    }, [filter])

    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log(search)
    }, [search])

    return (
        <div className='search-cont'>
            
        <input onChange={(e) => setSearch(e.target.value)}  type='text' placeholder='Seach For a country...'/>

        <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>

        </div>
    )
}

export default SearchCountry