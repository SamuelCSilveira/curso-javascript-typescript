function relogio() {
    function criaHoraDosSegundos(segundos) {
        const date = new Date(segundos * 1000);
        return date.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function(event) {
        const el = event.target;
        
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
    
    // iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });
    
    // pausar.addEventListener('click', function(event) {
    //     relogio.classList.add('pausado');
    //     clearInterval(timer);
    // });
    
    // zerar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00';
    //     segundos = 0;
    // });
}

relogio();