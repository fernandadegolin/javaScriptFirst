import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// Execução clientes
const cliente1 = new Cliente('Fernanda Degolin', 11122233344);
const cliente2 = new Cliente('Jessica Crusco', 12345678900);

// Conta Corrente
const contaCorrente = new ContaCorrente (cliente1, cliente2, 1001);

// Conta Poupança
const contaPoupanca = new ContaPoupanca (50, cliente1, cliente2, 1001)



// Execução operações
// Depositar
contaCorrente.depositar(450);
contaCorrente.depositar(100);

// Sacar
contaCorrente.sacar(50);

// Transferir


console.log(contaCorrente);
console.log(contaPoupanca)








