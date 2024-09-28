function main() {
    const dataEHora = document.querySelector('#header');
    
    const data = new Date();

    dataEHora.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

    // const diaSemana = data.getDay();
    // const dia = data.getDate();
    // const mes = data.getMonth();
    // const ano = data.getFullYear();
    // const hora = data.getHours();
    // const min = data.getMinutes();

    // dataEHora.innerHTML = formatarDataEHora(diaSemana, dia, mes, ano, hora, min);
}

// function formatarDataEHora(diaSemana, dia, mes, ano, hora, min) {
//     return `${getDiaExtenso(diaSemana)}, ${dia} de ${getMesExtenso(mes)} de ${ano}<br />${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`;
// }

// function getDiaExtenso(diaSemana) {
//     switch (diaSemana) {
//         case 0:
//             return 'domingo';
//         case 1:
//             return 'segunda-feira';
//         case 2:
//             return 'terça-feira';
//         case 3:
//             return 'quarta-feira';
//         case 4:
//             return 'quinta-feira';
//         case 5:
//             return 'sexta-feira';
//         case 6:
//             return 'sábado';
//     }
// }

// function getMesExtenso(mes) {
//     switch (mes) {
//         case 0:
//             return 'janeiro';
//         case 1:
//             return 'fevereiro';
//         case 2:
//             return 'março';
//         case 3:
//             return 'abril';
//         case 4:
//             return 'maio';
//         case 5:
//             return 'junho';
//         case 6:
//             return 'julho';
//         case 7:
//             return 'agosto';
//         case 8:
//             return 'setembro';
//         case 9:
//             return 'outubro';
//         case 10:
//             return 'novembro';
//         case 11:
//             return 'dezembro';
//     }
// }

// function zeroAEsquerda(numero) {
//     if (numero < 10) return `0${numero}`;
//     return numero;
// }

main();