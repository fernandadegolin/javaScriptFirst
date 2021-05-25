import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

// Execução clientes
const cliente1 = new Cliente('Fernanda Degolin', 11122233344);
const cliente2 = new Cliente('Jessica Crusco', 12345678900);

// Conta Corrente
const contaCorrente = new ContaCorrente (cliente1, cliente2, 1001);

// Conta Poupança
const contaPoupanca = new ContaPoupanca (50, cliente1, cliente2, 1001);

// Conta Salario
const contaSalario = new ContaSalario (cliente2);


// Execução operações
// Depositar
contaSalario.depositar(100);
contaSalario.sacar(10);

// Sacar


// Transferir


console.log(contaSalario);









