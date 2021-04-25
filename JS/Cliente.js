export class Cliente{
    nome;
    _cpf;

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