const pessoa = {
    nome: 'Samuel',
    sobrenome: 'Silveira',
    idade: 29,
    endereco: {
        rua: 'Rua Manoel Leonardo',
        numero: 27
    }
};

// Atribuição via desestruturação
const { nome , ... resto } = pessoa;
console.log(resto);