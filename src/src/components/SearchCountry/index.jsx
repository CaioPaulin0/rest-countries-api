import React from 'react';
import './SearchCountry.css'
const SearchCountry = ({search,filter}) => {

    return (
        <div className='search-cont'>

         <div className='inputDiv'>
         <i class="fa-solid fa-magnifying-glass"></i>
        <input onChange={search}  type='text' placeholder="Seach For a country..."/>
        </div>   

        <select onChange={filter}>
            <option value="Americas">Filter by Region</option>
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