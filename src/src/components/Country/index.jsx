import './Country.css'

const Country = ({img,name,population,region,capital,json}) => {

        return (
            <div onClick={() => {      
                const objData = {
                    name: json.name.common,
                    nativeName: json.name.nativeName.nld,
                    population: json.population,
                    region: json.region,
                    subRegion: json.subregion,
                    capital: json.capital,
                    topLevelDomain: json.tld,
                    currencies: json.currencies,
                    languagues : json.languages
                }

                console.log(objData)
        }}  
        className="country" key={name} date-country={region}>
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
    )
}

export default Country