// Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Samuel');
const funcao2 = retornaFuncao('Silveira');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());