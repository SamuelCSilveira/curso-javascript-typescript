// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

// {} <- this -> this
const p1 = new Pessoa('Samuel', 'Silveira');
delete p1.nome;
console.log(p1);