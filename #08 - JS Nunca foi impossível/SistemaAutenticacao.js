export class SistemaAutenticacao {
    static login(autenticavel, senha){
        return autenticavel._senha == senha;
    }
}