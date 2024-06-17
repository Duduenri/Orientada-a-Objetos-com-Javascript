const user = {
    nome: "Eduardo",
    email: "eduess290799@gmail.com",
    nascimento: "1999/07/29",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Thaiane",
    email: "thaianepaulsen28@gmail.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
}
}


Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()










//user.exibirInfos()
// Eduardo eduess290799@gmail.com
//const exibir = user.exibirInfos
//exibir()
//herança de protótipo