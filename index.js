import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Dudu', 'd@m', '2024-19-06')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin('Thai', 'thai@.com', '2024-20-06')
// console.log(novoAdmin.nome)
// novoAdmin.nome = ''
// console.log(novoAdmin.nome)

const novoDocente = new Docente('gui', 'g@g.com', '2021-01-01')
console.log(novoDocente.exibirInfos())
// novoUser.#nome = 'Alterando de qualquer jeito'
// console.log(novoUser.nome)
// o _ é mais utilizado que o # para privar atributos no Typescript