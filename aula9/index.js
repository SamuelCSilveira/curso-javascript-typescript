// String, number, undefined, null, boolean, symbol
const nome = 'Samuel'; // String
const nome1 = "Samuel"; // String
const nome2 = `Samuel`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2