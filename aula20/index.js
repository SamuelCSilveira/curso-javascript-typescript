/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Samuel',
    sobrenome: 'Silveira',
};
const b = a;

a.nome = 'João';
console.log(a, b);