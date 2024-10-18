// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobrado = numeros.map(valor => valor * 2);
// console.log(numeros);
// console.log(dobrado);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Samuel', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const removido = pessoas.map(obj => ({ idade: obj.idade }));
console.log(removido);

const adicionado = pessoas.map((obj, indice) => { 
    // const newObj = { ...obj }; // Desta forma não altera objeto original, por referência
    newObj.id = indice + 1;
    return newObj;
});
console.log(adicionado);

// console.log(pessoas);