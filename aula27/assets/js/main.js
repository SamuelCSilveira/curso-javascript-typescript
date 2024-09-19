function main() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calculaIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = parseFloat(form.querySelector('.peso').value);
        const altura = parseFloat(form.querySelector('.altura').value);
        const imc = calculaIMC(peso, altura);

        if (!peso) {
            resultado.innerHTML = `<p>Peso inválido</p>`;
            resultado.style.background = 'rgb(247, 104, 104)';
        }
        else if (!altura) {
            resultado.innerHTML = `<p>Altura inválida</p>`;
            resultado.style.background = 'rgb(247, 104, 104)';
        }
        else {
            if (imc >= 0 && imc < 18.5) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`;
            }
            else if (imc >= 18.5 && imc <= 24.9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`;
            }
            else if (imc >= 25 && imc <= 29.9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`;
            }
            else if (imc >= 30 && imc <= 34.9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`;
            }
            else if (imc >= 35 && imc <= 39.9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
            }
            else if (imc > 39.9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`;
            }
            else {
                resultado.innerHTML = `<p>Valores inválidos</p>`;
                resultado.style.background = 'rgb(247, 104, 104)';
            }
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

main();