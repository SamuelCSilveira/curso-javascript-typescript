// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Samuel',
    sobrenome: 'Silveira',
    idade: 29
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

// for (let fruta in frutas) {
//     console.log(frutas[fruta]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
