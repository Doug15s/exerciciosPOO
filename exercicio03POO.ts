// Crie uma classe que modele uma conta corrente:
// Atributos: número da conta, nome do correntista e saldo.
// Métodos: alterar nome, depósito e saque.

class conta {
    numeroConta: number;
    nomeCorrentista: string;
    saldo: number;

    constructor(numeroConta: number, nomeCorrentista: string, saldo: number) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
    }

    static alteraNome(numeroConta: number, nomeNovo: string): void {
        if (this.numeroConta == numeroConta) {
            this.nomeCorrentista = nomeCorrentista;
        }
    }

    static depositar(numeroConta: number, valor: number): void {
        if (this.numeroConta == numeroConta) {
            this.saldo += valor;
        }
    }

    sacar(numeroConta: number, valor: number): void {
        if (this.numeroConta == numeroConta && this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Conta não encontrada ou saldo insuficiente!");
        }
    }
}