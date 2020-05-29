import React, { Component } from "react";

import {
    Table, Container, Row, Button
} from "react-bootstrap"
import "./ListaProdustos.css"
import servicesProdutos from "../../services/Produtos"

const Produtos = new servicesProdutos();
class ListaProdutos extends Component {

    state = {
        produtos: []
    }

    async componentDidMount() {
        await this.getProdutos()
    }

    getProdutos = () => {
        Produtos.get()
            .then(res => {
                this.setState({ produtos: res });
            })
            .catch(err => {
                alert('Erro ao carregar')
            })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    delete = (id) => {
        Produtos.delete(id)
            .then(async res => {
                alert('Deletado com successo')
                await this.getProdutos()
            })
            .catch(err => {
                alert('Erro ao deletar')
            })
    }

    render() {

        const { produtos } = this.state;

        return (
            <Container>
                <Row>
                    <Table className="margin" striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.preco}</td>
                                    <td><Button
                                        variant="danger"
                                        onClick={() => this.delete(item.id)}
                                    >
                                        Delete
                                    </Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}

export default ListaProdutos;