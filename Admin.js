import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    nomeAdmin() {
        return`${this.nome}`
    }

    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin('Eduardo', 'd@.com', '2020-01-01')
// console.log(novoAdmin.criarCurso('JS', 20))

// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())