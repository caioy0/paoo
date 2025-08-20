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

// AULA 3

// Uma concessionaria com CNPJ e endereco, com logradouro, numero e bairro (pensar na estrutura que um bairro pode ter). Ela tem um estoque de veiculos. Cada um tem marca, modelo e ano de fabricacao. Precisa pensar que o numero de veiculos que a concessionaria tem pode variar ao longo do tempo, ele pode estar vazio, pode ter 15 veiculos, pode ter 502 e assim por diante.

// const concessionaria ={
// 	CNPJ: ,
// 	endereco: {
// 		logradouro: ,
// 		numero: ,
// 		bairro:{
// 			nome: ,
// 			regiao: 
// 		}
// 	}
// 	veiculos:{
// 		'ford': {
// 			modelo: 'Ka"',
// 			anoDeFabricacao: 2015
// 		},{
// 			modelo: 'Ecosport'
// 			anoDeFabricacao: 2018
// 		},
// 		'chevrolet': {
// 			modelo: 'camaro',
// 			anoDeFabricacao: 2020
// 		}

// 		marca: ,
// 		modelo: ,
// 		ano: ,
// 		quantidade: 
// 	}
// }

// for (let marca of Object.keys(concessionaria.veiculos)){
// 	console.log(marca)
// }
// console.log(consessionaria.endereco.bairro.regiao)
// console.log(concessionaria['endereco']['Bairro']['nome'])

// let calculadora = {
// 	soma: (a,b) => a+b,
// 	subtracao: function(a,b){
// 		return a-b
// 	}
// }

// let x = 2
// let y = 3

// for (let opercao of Object.values(calculadora)){
// 	// Antes de mostrar o resulatado, mostrar o nome da funcao, interpolando em um unico console.log
// 	console.log(operacao(x,y))
// }

// processamento sincrono e assincrono

// const a = 2+7
// const b = 5
// console.log(a+b)

// function demorada(){
// 	const atualMais2Segundo = new Date().getTime() * 2000
// 	while(new Date().getTime() <= atualMais2Segundo);
// 	const d = 8 + 4
// 	return d
// }

// const a = 2 + 6
// const b = 5+9
// const d = demorada()
// setTimeout( () => {
// 	const d = demorada ()
// 	console.log(`d: ${d}`)
// }, 0)
// setTimeout(() => {
// 	const tempo = 1000
// 	const d = demorada(tempo)
// 	console.log(`d(${tempo})' ${d}`)
// },0)
// const e = 2 + a + b
// console.log(`e: ${e}`)

// Inferno de callbacks
// aka callback hell

const fs = require('fs')
const abritArquivo = function(nomeArquivo){
	const exbirConteudo = function(erro, conteudo){
		if(erro){
			console.log(`Deu erro: ${erro}`)
		}else{
			console.log(`Conteudo: ${conteudo}`)
			const dobro = Number(conteudo.toString()) * 2
			const finalizar = function(erro){
				if(erro){
					console.log(`Deu erro escrevendo o dobro: ${erro}`)
				}else{
					console.log('A escrita do dobro deu certo')
				}
			}
			fs.writeFile('dobro.txt', dobro.toString())
			console.log('Fim da exibirConteudo')
		}
	}
	fs.readFile(nomeArquivo, exbirConteudo)
	console.log('Fim da abrirArquivo')
}
// chamar a funcao daqui a pouco
abrirArquivo("arquivo.txt")