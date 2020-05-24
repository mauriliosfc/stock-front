import api from "../api"

export default class Auth {

    login(email, senha) {
        return api.post('authenticate', {
            email: email,
            senha: senha
        }).then(res => {
            return res.data
        }).catch(error => {
            throw error
        })
    }

    isAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            return true
        }
        return false;
    }
}