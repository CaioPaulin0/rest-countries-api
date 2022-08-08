
const url = 'https://restcountries.com/v3.1/all'

async function selectCountry( strong, population, region, capital){
    const div = document.createElement('div').setAttribute('class', 'selecCountry')

    //let imgC = document.createElement('img')
    //img.setAttribute('src', img)

    let strongC = document.createElement('strong')
    strong.innerHTML = strong

    let sPopC = document.createElement('span')
    sPop.innerHTML = population

    let sRegC = document.createElement('span')
    sReg.innerHTML = region

    let sCapC = document.createElement('span')
    sCap.innerHTML = capital

    div.appendChild(imgC)
    div.appendChild(strongC)
    div.appendChild(sPopC)
    div.appendChild(sRegC)
    div.appendChild(sCapC)

     document.querySelector('body').appendChild(div)

     return
}

function countrSelect(data){
    
    let img = document.createElement('img')
    img.setAttribute('src', data[0].flags.png)
    
    let strong = document.createElement('strong')
    strong.innerHTML = data[0].name.common
    
    const countrySelectDiv = document.createElement('div')
    countrySelectDiv.classList.add('countrySelect')
    countrySelectDiv.appendChild(img)
  
    document.querySelector('body').appendChild(countrySelectDiv)

    return
}

country = (data) => {
    let img = document.createElement('img')
    img.setAttribute('src', data.flags.png)

    let strong = document.createElement('strong')
    strong.innerHTML = data.name.common

    let sPop = document.createElement('span')
    sPop.innerHTML = 'Population: ' + data.population

    let sReg = document.createElement('span')
    sReg.innerHTML = data.region

    let sCap = document.createElement('span')
    sCap.innerHTML = data.capital

    let li = document.createElement('li')
    li.setAttribute('data-country', data.region)
    li.appendChild(img)
    li.appendChild(strong)
    li.appendChild(sPop)
    li.appendChild(sReg)
    li.appendChild(sCap)

    li.addEventListener('click', () => {

        const strongLi = li.querySelector('strong').innerText

        console.log(strongLi)

            axios.get(`https://restcountries.com/v3.1/name/${strongLi}`)
            .then((res) => {
                const data = res.data
                const result = document.getElementById('result')
                document.body.removeChild(result)

                countrSelect(data)

                console.log(data)
            })
            .catch(error => console.log(error))
        
    })

    return li
}

axios.get(url)
    .then(res => {
        const data = res.data

        data.map(async (res) => {
            document.querySelector('#result').appendChild(country(res))
        })

    })
    .catch((error) => {
        console.log(error)
    })

async function teste() {

    const dataProduto = await document.querySelectorAll(`[data-country="Africa"]`)

    for (let i = 0; i < dataProduto.length; i++) {
        dataProduto[i].classList.add('remove')
    }
}
teste()

remove = (value) => {
    const dataCountry = document.querySelectorAll(`[data-country=${value}]`)

    dataCountry.forEach(cont => cont.classList.add('remove'))
}

const dataBtn = document.querySelectorAll('[data-btn]')

for (let i = 0; i < dataBtn.length; i++) {
    dataBtn[i].addEventListener('click', () => {
        if (i === 0) {
            remove('Africa')
        }
        if (i === 1) {
            remove('Americas')
        }
        if (i === 2) {
            remove('Asia')
        }
        if (i === 3) {
            remove('Europe')
        }
        if (i === 4) {
            remove('Oceania')
        }
        if (i === 5) {
            remove('Antarctic')
        }

        console.log(i)
    })
}



