// 1 + 2 ... + (n-1) +n

console.log('start...')
function calculoRapido(n){
    return n >= 0 ? Promise.resolve((n/2) * (n + 1)) : Promise.reject('only positives')
}
let myPromise = calculoRapido(10)
myPromise.then((res)=>{
    console.log('resultado: ', res)
})
.catch((error)=>{
    console.log('Error: ', error)
})

let myPromise2 = calculoRapido(-6)
myPromise2.then(res=>console.log('resultado: ', res))
.catch(error=>console.log('Error: ', error))

console.log('end...')

function f (a){
    console.log(a)
}
const a = 2
f(a)

// function calculoDemorado(n){
//     let p = new Promise(function (resolve,reject){
//         let res = 0
//         for(let i = 1; i <= n; i++){
//             res = res + i
//         }
//         resolve(res)
//     })
//     return p
// }
// let resultado = calculoDemorado(10)
// console.log(resultado)
// // then/catch
// // myPromise.then((somatorio)=>{
// //     console.log(`Somatorio: ${somatorio}`)
// // })    
// // .catch((error)=>{
// //     console.log(`Error: ${error}`)
// // })
// console.log('finishind main script')

