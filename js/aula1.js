// Declaracao de variaveis
// const, let e var
// uso do var nao recomendado
// No java -> String nome = "Jose";
// hoist, icar

// var idade = 18;
// console.log("Oi " + nome);
// if (idade >= 18 ) {
//     var nome = "Joao";
//     console.log("Sim, " + nome + " voce pode dirigir");
// }
// // Utilizando crase ``
// console.log(`Ate mais, ${nome}`);

// var linguagem = "Javascript";
// console.log("Aprendendo" + linguagem);
// var linguagem = "Java";
// console.log("Aprendendo" + linguagem);

// var a = 1;
// var nome = "Joses";
// console.log(a);
// console.log(nome);

// let a = 2;
// let nome = "Jose";
// console.log(a);
// console.log(nome);
// nome = "Jose da Silva";
// console.log(nome);

// const nome = 'Jose';
// console.log(nome);
// nome = 'Jose da Silva';

// Sistema de tipos
let idade = 20;
console.log(typeof(idade));
const nome = "Ana";
console.log(typeof(nome));
idade = "vinte";
console.log(typeof(idade));

// coercao
const n1 = 2;
const n2 = '3';
// coercao implicita
const n3 = n1 + n2;
console.log(n3);
// coercao explicita
const n4 = n1 + Number(n2);
console.log(n4);

// operacao de comparacao
// operadores == e ===
console.log(1 == 1);
console.log(1 == "1");
// o === compara primeiro os tipos
console.log(1 === 1);
console.log(1 === "1");
// console.log(true == "true");
// console.log(true === "true");
// [] New ArrayList<object>(); -> Java
console.log(1 == []);
console.log(1 == [1]);
console.log(1 == [1,1]);