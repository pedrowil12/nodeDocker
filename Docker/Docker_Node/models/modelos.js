const { runInThisContext } = require("vm");

class Funcionario{
    constructor(nome, cpf, dataNasc, email, telefone){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.email = email;
        this.telefone = telefone;
    }
}

module.exports = {
    Funcionario: Funcionario
}  
