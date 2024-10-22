/*
Object.values
Object.entries
Object.assign(des, any)
Objetct.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (defina uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}