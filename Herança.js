class Pessoa{
    idade = 0
    constructor(nome, Cpf){
        this.nome = nome
        this.Cpf = Cpf
    }
}
class Funcionario extends Pessoa{
    constructor(name, Cpf, id){
        super(name)
        this.name = name
        this.Cpf = Cpf
        this.id = id
    }
}

let p1 = new Funcionario("Ana",49550272566,4567);
let p2 = new Funcionario("Jonathan",60794272567,5687);
p1.idade = 34
console.log(`${p1.name} tem Cpf ${p1.Cpf} e numero de cadastro ${p1.id}`)