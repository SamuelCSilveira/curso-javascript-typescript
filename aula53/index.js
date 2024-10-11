// IIFE -> Immediately invoked function expression
// (function(){})();

(function(idade, peso, altura) {
    const sobrenome = 'Silveira';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Samuel'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);