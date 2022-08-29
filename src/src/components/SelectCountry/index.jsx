


import './SelectCountry.css'

const SelectCountry =({style,name}) => {

    const ls = localStorage.getItem('country')   
    const dataJson = JSON.parse(ls)

    return (
        <section style={style} className="sectionCountry">
            <button>Back</button>
            
            <div className='countrySelect'>
                <img src={dataJson.img} alt='country flag' />
            
            <div className='countryText'>
                <strong>{dataJson.name}</strong>
                <ul>
                    <li>
                        <p>Native Name:</p>
                        <span>{dataJson.nativeNAME}</span>
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

                    <li>
                        <p>Top Level Domain:</p>
                        <span>{dataJson.topLevelDomain}</span>
                    </li>
                  
                </ul>
            </div>
            </div>
        </section>
    )
}

export default SelectCountry