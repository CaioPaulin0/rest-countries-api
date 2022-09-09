import Header from '../Header';

import './SelectCountry.css'

const SelectCountry =({style,name}) => {

    const ls = localStorage.getItem('country')   
    const dataJson = JSON.parse(ls)

    const nativeName = Object.values(dataJson.nativeName)[0]
    const currencies = Object.values(dataJson.currencies)[0]
    const Languagues = Object.values(dataJson.languagues)[0]

    document.title = ` Country - ${dataJson.name}`

    return (
        <>
        <Header />
        <section style={style} className="sectionCountry">
            <a href="/"><i class="fa-solid fa-arrow-left"></i> Back</a>
            
            <div className='countrySelect'>
                <img src={dataJson.img} alt='country flag' />
            
            <div className='countryText'>
                <strong>{dataJson.name}</strong>
                <ul className='countryInfoText'>
                    <div>
                    <li>
                        <p>Native Name:</p>
                        <span>{nativeName.official}</span>
                    </li>

                    <li>
                        <p>Population:</p>
                        <span>{dataJson.population}</span>
                    </li>

                    <li>
                        <p>Region:</p>
                        <span>{dataJson.region}</span>
                    </li>

                    <li>
                        <p>Sub Region:</p>
                        <span>{dataJson.subRegion}</span>
                    </li>

                    <li>
                        <p>Capital:</p>
                        <span>{dataJson.capital}</span>
                    </li>

                    </div>
                    
                    <div>
                    <li>
                        <p>Top Level Domain:</p>
                        <span>{dataJson.topLevelDomain}</span>
                    </li>

                    <li>
                        <p>Currencies:</p>
                        <span>{currencies.name}</span>
                    </li>

                    <li>
                        <p>Languagues:</p>
                        <span>{Languagues}</span>
                    </li>
                    </div>
                </ul>
                <ul className='bCountries'>
                    <p>Border Countries :</p>
                    {dataJson.borderCountries === undefined ? <li>none</li> : dataJson.borderCountries.map((cont) => {
                        return <li key={cont}>{cont}</li>
                    })}
                </ul>
            </div>
            </div>
        </section>
        </>
    )
}

export default SelectCountry