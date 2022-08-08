

function countrySingle(name){
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
}

countrySingle('Brazil')
