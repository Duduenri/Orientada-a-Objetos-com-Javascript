import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Dudu', 'd@m', '2024-19-06')
console.log(novoUser.exibirInfos())

// novoUser.#nome = 'Alterando de qualquer jeito'
// console.log(novoUser.nome)
// o _ é mais utilizado que o # para privar atributos no Typescript