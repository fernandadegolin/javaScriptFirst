import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ('Jodie Comer', 200000, 35055599900)
diretor.cadastrarSenha('1234');

const gerente = new Gerente ('Eve Polastri', 100000, 15015015099)
gerente.cadastrarSenha('12345');

const cliente = new Cliente ('Fernanda Degolin', 35055544563, 'pexion');

const diretorLogado = SistemaAutenticacao.login(diretor, '1234');
const gerenteLogado = SistemaAutenticacao.login(gerente, '12345');
const clienteLogado = SistemaAutenticacao.login(cliente, 'pexion')

console.log(gerenteLogado);











