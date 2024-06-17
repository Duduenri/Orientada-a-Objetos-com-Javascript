// function User(nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// } 

// const novoUser = new User('Eduardo', 'eduess290799@gmail.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Eduardo', 'eduess290799@gmail.com')
//     this.role = role || 'estudante'
// }


// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome) {
        return `Olá, eu sou ${this.nome}!`
    }
}

const novoUser = Object.create(user)
novoUser.init('Eduardo', 'eduess290799@gmail.com')
console.log(novoUser.exibirInfos())


// console.log(user.isPrototypeOf(novoUser)) //true

// para comentar CTRL K + CTRL C
//para descomentar CTRL K + CTRL U