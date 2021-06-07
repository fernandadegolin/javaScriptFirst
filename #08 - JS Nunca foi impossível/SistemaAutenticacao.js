export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.estaAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static estaAutenticavel (autenticavel){
       return "autenticar" in autenticavel && 
       autenticavel.autenticar instanceof Function
    }
}