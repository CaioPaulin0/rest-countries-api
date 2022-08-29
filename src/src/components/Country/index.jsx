
import './Country.css'

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
            languagues : json.languages
        }

        localStorage.setItem('country', JSON.stringify(objData))
        document.querySelector('.section').style.display= "none"
        console.log(json)
        document.querySelector('.sectionCountry').style.display= "block"
    }


        return (
            <div 
            onClick={click}  
            className="country" 
            key={name} 
            date-country={region}
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
    )
}

export default Country