class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
            }
        );
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;
        this.geraNovoCpf();
    
        return this.novoCpf === this.cpfLimpo;
    }

    static criaDigito(cpfParcial) {        
        let total = 0;
        let regressivo = cpfParcial.length + 1;
        
        for (let stringNumerica of cpfParcial) {
            total += Number(stringNumerica) * regressivo;
            regressivo--;
        }

        const digito = 11 - (total % 11);
        
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
        return this.novoCpf;
    }
}

// const cpf = new ValidaCpf('072.995.774-88');

// if(cpf.valida()) {
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
// }