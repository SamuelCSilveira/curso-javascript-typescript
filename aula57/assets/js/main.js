function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };
    
    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }
    
    this.clearDisplay = () => this.display.value = '';
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay(el.innerText);
            if (el.classList.contains('btn-del')) this.apagaUm(el.innerText);
            if (el.classList.contains('btn-eq')) this.realizaConta(el.innerText);
        });
    };

    this.realizaConta = () => {
        let conta = this.display.value;
        
        try {
            conta = eval(conta);
            
            if (conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida!');
                return;
            }
            
            this.display.value = String(conta);
        } catch(e) {
            alert('Conta inválida!');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();