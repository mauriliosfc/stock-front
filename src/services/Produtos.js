import api from "../api"

export default class Produtos {

    create(nome, quantidade, preco) {
        return api.post('produtos', {
            nome,
            quantidade,
            preco
        }).then(res => {
            return res.data
        }).catch(error => {
            throw error
        })
    }

    get() {
        return api.get('produtos').then(res => {
            return res.data
        }).catch(error => {
            throw error
        })
    }

    delete(id) {
        return api.delete('produtos/' + id).then(res => {
            return res.data
        }).catch(error => {
            throw error
        })
    }

    update() {

    }
}