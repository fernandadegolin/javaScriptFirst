export class Cliente{

        // Assessor CPF
        get cpf(){
            return this._cpf;
        }

    // Constructor
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}