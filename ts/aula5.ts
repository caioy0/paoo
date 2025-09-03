// require('dotenv').config();
import axios from 'axios';
import { resolve } from 'path';

const PROTOCOL = 'https'
const BASE_URL = 'api.openweathermap.org/data/2.5/forecast'
const UNITS = 'metric'
const Q = 'Itu'
const LANG = 'pt_br'
const CNT = 3
const APPID = process.env.APPID;

const WEATHER_URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&q=${Q}&cnt=${CNT}&lang=${LANG}`
// const promiseResultante = axios.get(WEATHER_URL)

// promiseResultante.then((resposta) => {
    
//     return resposta
// })
// .then((resposta) =>{
//     const list = resposta.data.list
// })


// async/await

// Processo Bloqueante em C
// scanf("%d", &a);
// printf("%a", a);
// printf("Tchau");

// axios.get(url).then(res=>{
//     console.log('seila')
// })
// console.log('oi')

// versao 2015
// function hello(nome){
//     //return `Oi, ${nome}`
//     const p = new Promise((resolve, reject)=>{
//         resolve (`Oi, ${nome}`)
//     })
//     return p
// }

// const res = hello('Ana')
// //console.log(res)
// res.then((textoResultante) => {
//     console.log(textoResultante)
// })

// // versao 2017
// async function hi(nome: string): Promise<string> {
//     return `Oi, ${nome}`
// }

// hello('Jay').then(resultado => console.log(resultado))


// Novos teste
function fatorial(n: number): Promise<number> {
    if (n < 0) return Promise.reject('Valor não pode ser negativo')
    if (n === 0 || n === 1) return Promise.resolve(1)
    
    let resultado = 1
    for (let i = 2; i <= n; i++) resultado *= i
        
    return Promise.resolve(resultado)
}

// fatorial(5)
//     .then(resultado => console.log(`Fatorial: ${resultado}`))
//     .catch(erro => console.error(`Erro: ${erro}`))

async function callAynsc(): Promise<void> {
    const n1 = 5
    const n2 = -2
    try{
        const res1 = await fatorial(n1)
        console.log(`Fatorial de ${n1}: ${res1}`)
    }catch(err){
        console.log(`Erro: ${err}`)
    }

    try{
        const res2 = await fatorial(n2)
        console.log(`Fatorial de ${n2}: ${res2}`)
    }catch(err){
        console.log(`Erro: ${err}`)
    }
}

callAynsc()
console.log('terminando script principal...')


// function chamadaComThenCatch(): void {
//     const n1 = 5
//     fatorial (n1)
//         .then(resultado => console.log(`Fatorial: ${resultado}`))
//         .catch(erro => console.error(`Erro: ${erro}`))
    
//         const n2 = -2
//     fatorial (n2)
//         .then(resultado => console.log(`Fatorial: ${resultado}`))
//         .catch(erro => console.error(`Erro: ${erro}`))
// }

// chamadaComThenCatch()