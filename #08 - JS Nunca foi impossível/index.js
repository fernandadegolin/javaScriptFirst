import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ('Jodie Comer', 200000, 35055599900)
diretor.cadastrarSenha('1234');

const gerente = new Gerente ('Eve Polastri', 100000, 15015015099)

const logado = SistemaAutenticacao.login(diretor, '1234');

console.log(logado)











