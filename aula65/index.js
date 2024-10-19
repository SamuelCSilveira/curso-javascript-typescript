// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const  numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     acumulador += valor;
//     return acumulador;
// }, 0);
// console.log(total);

// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     if (valor % 2 === 0) {
//         acumulador.push(valor);
//     }
//     return acumulador;
// }, []);
// console.log(total);

// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     if (valor % 2 !== 0) {
//         acumulador.push(valor);
//     }
//     return acumulador;
// }, []);
// console.log(total);

// const total = numeros.reduce((acumulador, valor) => {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);
// console.log(total);

// const total = numeros.reduce((acumulador, valor) => {
//     if (valor % 2 === 0) {
//         acumulador += valor * 2;
//     }
//     return acumulador;
// }, 0);
// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Samuel', idade: '29' },
    { nome: 'Maria', idade: '23' },
    { nome: 'Eduardo', idade: '55' },
    { nome: 'Letícia', idade: '10' },
    { nome: 'Rosana', idade: '64' },
    { nome: 'Wallace', idade: '63' }
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);