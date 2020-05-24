import api from "../api"

export default class User {

    create(nome, email, senha) {
        return api.post('user', {
            nome: nome,
            email: email,
            senha: senha,
        }).then(res => {
            return res.data
        }).catch(error => {
            throw error
        })
    }
}