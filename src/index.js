
const url = 'https://restcountries.com/v3.1/all'

country = (data) => {
    let img = document.createElement('img')
    img.setAttribute('src', data.flags.png)

    let strong = document.createElement('strong')
    strong.innerHTML = data.name.common

    let sPop = document.createElement('span')
    sPop.innerHTML = data.population

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

    return li
}



axios.get(url)
    .then(res => {
        const data = res.data
        data.map(async (res) => {
            document.querySelector('#result').appendChild(country(res))
        })

        async function teste(){
    
            const dataProduto = await document.querySelectorAll(`[data-country="Africa"]`)
            
            for(let i = 0; i < dataProduto.length; i++){
                dataProduto[i].classList.add('remove')
            }
            console.log(dataProduto[0])
        }
        teste()
    })
    .catch((error) => {
        console.log(error)
    })

    remove = (value) => {
        const dataCountry = document.querySelectorAll(`[data-country=${value}]`)

        dataCountry.forEach(cont => cont.classList.add('remove'))
    }

    const dataBtn = document.querySelectorAll('[data-btn]')

    for(let i = 0; i < dataBtn.length; i++){
        dataBtn[i].addEventListener('click', () => {
            if(i === 0){
                remove('Africa')
            }
            if(i === 1){
                remove('Americas')
            }
            if(i === 2){
                remove('Asia')
            }
            if(i === 3){
                remove('Europe')
            }
            if(i === 4){
                remove('Oceania')
            }
            if(i === 5){
                remove('Antarctic')
            }

            console.log(i)
        })
    }