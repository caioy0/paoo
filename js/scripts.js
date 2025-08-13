// vetores
// v2 = [2, "abc", true]
// console.log(v2)
// for(let i = 0; i< v2.lenght; i++){
//     console.log(v2[i])
// }

// v1 = []
// console.log(v1.lenght)
// v1[0] = 3.4
// console.log(v1.lenght)
// v1[10] = 2
// console.log(v1.lenght)
// v1[7] = "abc"

// funcoes

// function hello (){ // Aqui nao tem
//     console.log('Oi')
// }
// hello()
// function hello(nome){
//     console.log('Hello, ' + nome)
// }
// hello('Ana')

// int somar (int a, int b){
//     return a+b;
// }

// function soma(a, b){
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)

/// Callable "chamavel", que pode ser chamada
// const dobro = function(n){
//     return 2*n
// }
// console.log(dobro(6))

// const triplo = function (n=5){ // defini um numero padrao
//     return 3 * n
// }
// triplo()
// triplo(10)
// console.log(triplo())

// arrow function
// tem somente uma linha a chave pode ser omitida
// const hello = () => console.log('Hello')
// hello()

// tem somente uma linha que produz um valor a ser devolvido:
// const dobro = (n) => 2 * n // tem um return omitido
// console.log(dobro(5))

// const dobro2 = (n) => { // com chave precisa de return
//     console.log('\nCalculando o dobro...')
//     return 2 * n
// } 
// console.log(dobro2(2))

// tem exatamente um parametro: parenteses omitido
// const dobro3 = n => 2 * n
// console.log(dobro3(4))

// vetores, parte 2
// const nomes = ['Ana maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(nomes)
// console.log(apenasComA)

// mapeamento de nomes
// ['Ana maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'] -> ['A', 'A', ...]
// const nomes = ['Ana maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const res = nomes.map(function a(nome){return nome[0]})
// console.log(res)

// dada a colecao a fseguir, produzir outra colecao contendo o quadrado de cada numero
// usando arrow functions e digitando a menor quantidade de caracteres possiveis
// const numeros = [1,2,3] //[1, 4, 9]
// const resultado = numeros.map((n) => n*n)
// console.log(resultado)

// const todosComecamComA = nomes.every(n=>n.startsWith("A"))
// console.log(todosComecamComA)
// const peloMenosUmComecaComA = nomes.some(n=>n.startsWith('A'))
// console.log(peloMenosUmComecaComA)

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)


// Closures
// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variavel')
// }
// //umaFuncao()
// function f(funcao){
//     funcao()
// }
// //f(umaFuncao())
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return undefined
//     }
//     return outraFuncao()
// }

// f(g())
//f(g)
//g()()
//const gResult = g ()
//gResult()

// f(function(){
//     console.log("Sou uma function passada para f")
// })
// f(()=> console.log("Sou uma arrow passada para f"))

// function ola(){
//     let nome = 'Joao'
//     return function(){
//         console.log(`Ola, ${nome}`)
//     }
//     // function g(){
//     //     console.log(nome)
//     // }
//     // g()
// }
// let olaResult = ola()
// olaResult()

function saudacoesFactory(saudacao, nome){

}