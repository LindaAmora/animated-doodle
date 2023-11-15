class Recrutamento{
        _Idade = 0
        constructor(nome, Cpf, id, dept){
            this.nome = nome
            this.Cpf = Cpf
            this.id = id
            this.dept = dept
        }
        setarIdade(novaIdade){
            if (typeof novaIdade == "number") {
                this.Idade = novaIdade
            }
        }

        get Idade(){
            return this._Idade
        }

        set Idade(x){
            if (typeof x == "number") {
                this._Idade = x
            }
        }
}

let p1 = new Recrutamento("Ana", 79521074596,5773,"Financeiro");
let p2 = new Recrutamento("Paula", 46731054256,6734,"Administrativo");

p1.Idade = 28
p2.Idade = 30
console.log(`${p1.nome} tem o Cpf ${p1.Cpf} com número de recrutamento ${p1.id} sendo do departamento ${p1.dept} com ${p1.Idade} anos de idade.`)
console.log(`${p2.nome} tem o Cpf ${p2.Cpf} com número de recrutamento ${p2.id} sendo do departamento ${p2.dept} com ${p2.Idade} anos de idade.`)
