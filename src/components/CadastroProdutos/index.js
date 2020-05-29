import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import {
    Form, Button, Container, Row, Col
} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import servicesProdutos from '../../services/Produtos'

const Produtos = new servicesProdutos();
const notify = (msg) => toast(msg);

export default class CadastroUsuario extends Component {

    state = {
        nome: null,
        quantidade: null,
        preco: null,
        loading: false,
        redirect: false
    }

    cadastrar = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        try {
            await Produtos.create(this.state.nome, this.state.quantidade, this.state.preco)
            notify("Cadastro realizado com sucesso!")
        } catch (error) {
            notify("Erro ao cadastrar Usuário");
        } finally {
            this.setState({ redirect: true });
            this.setState({ loading: false });
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Carregando...'
            >
                <ToastContainer />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            <Form>
                                <Form.Group controlId="formBasicquantidade">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="nome"
                                        placeholder="Enter nome"
                                        value={this.state.nome}
                                        onChange={this.handleChange('nome')}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicquantidade">
                                    <Form.Label>Quantidade</Form.Label>
                                    <Form.Control
                                        type="quantidade"
                                        placeholder="Enter quantidade"
                                        value={this.state.quantidade}
                                        onChange={this.handleChange('quantidade')}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Preco</Form.Label>
                                    <Form.Control
                                        type="Preco"
                                        placeholder="Preco"
                                        value={this.state.preco}
                                        onChange={this.handleChange('preco')}
                                    />
                                </Form.Group>
                                <Button
                                    onClick={this.cadastrar}
                                    block variant="primary"
                                    type="submit"
                                >
                                    Cadastrar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container >
            </LoadingOverlay>
        )
    }
}