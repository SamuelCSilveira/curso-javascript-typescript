const nome = 'Samuel';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Silveira';
    falaNome();
}
usaFalaNome();