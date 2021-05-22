import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0; //Atributo estatico

        // Assessor do cliente
        set cliente(novoValor){
            if (novoValor instanceof Cliente){
                this._cliente = novoValor;
            }
        }

        get cliente(){
            return this._cliente;
        }


        // Assessor do saldo
        get saldo(){
            return this.saldo;
        }

    // Construtores
        constructor(agencia, cliente){
            this.agencia = agencia;
            this._cliente = cliente;
            this._saldo = 0;
            ContaCorrente.numeroContas += 1;
        
        }


    // Funções de ações da conta corrente
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    
    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}