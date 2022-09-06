import React from 'react';
import './SearchCountry.css'
const SearchCountry = ({search,filter}) => {

    return (
        <div className='search-cont'>
            
        <input onChange={search}  type='text' placeholder='Seach For a country...'/>

        <select onChange={filter}>
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