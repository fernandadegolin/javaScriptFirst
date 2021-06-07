export class Cliente {

    // Assessor CPF
    get cpf() {
        return this._cpf;
    }

    // Constructor
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }

}