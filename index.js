import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// Execução clientes
const cliente1 = new Cliente('Fernanda Degolin', 11122233344);
const cliente2 = new Cliente ('Jessica Crusco', 12345678900);

// Execução contas
const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);

// Conta Poupança
const contaPoupanca = new ContaPoupanca (50, cliente1, cliente2, 1001)


console.log(contaPoupanca);
// Número de contas


// Execução operações
// Depositar
conta1.depositar(1000)
conta2.depositar(500);
// Sacar
conta1.sacar(50);
// Transferir
conta1.transferir(100, conta2);








