const axios = require('axios')

const PROTOCOL = 'https'
const BASE_URL = 'api.openweathermap.org/data/2.5/forecast'
const UNITS = 'metric'
const Q = 'Itu'
const LANG = 'pt_br'
const CNT = 1
const APPID = 

const URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&q=${Q}&cnt=${CNT}&${LANG}`

const promiseResult = axios.get(URL)

promiseResult.then((previsoes)=> {console.log(previsoes)})
.catch(erro=>console.log('erro'))

axios.get(URL)
console.log(axios.get(URL))
