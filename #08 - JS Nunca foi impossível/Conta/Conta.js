// Classe Abstrata - Feita exclusivamente para ser herdada. NUNCA TERÁ UM NEW CONTA

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('sai daqui, você não pode fazer essa instancia com o objeto do tipo conta diretamente. Essa é uma classe abstrata.');
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // Assessor do cliente
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }


    // Assessor do saldo
    get saldo() {
        return this.saldo;
    }

    // Método abstrato
    sacar(valor) {
        throw new Error('Método abstrato');
    }


    _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
