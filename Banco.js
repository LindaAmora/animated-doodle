class Banco{
    constructor(nome, Conta){
        this.nome = nome;
        this.Conta = Conta;
    }
    setarConta(novaConta){
        if (typeof novaConta == "string") {
            this.Conta = novaConta
        }
    }
}
let c1 = new Banco("Maria", "Poupança");
let c2 = new Banco("Jonathan", "Corrente");
let c3 = new Banco("Clayton", "Salario");
let c4 = new Banco("Carlos", "Pagamentos");

c4.setarConta("Pagamentos");
console.log(`${c4.nome} tem tipo de conta ${c4.Conta}`)