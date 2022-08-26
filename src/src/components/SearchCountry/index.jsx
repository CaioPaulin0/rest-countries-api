import './SearchCountry.css'

const SearchCountry = () => {
    return (
        <div className='search-cont'>
        <input type='text' placeholder='Seach For a country...'/>

        <select>
            <option value="Africa">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Africa">America</option>
            <option value="Africa">Asia</option>
            <option value="Africa">Europe</option>
            <option value="Africa">Oceania</option>
        </select>
        </div>
    )
}

export default SearchCountry