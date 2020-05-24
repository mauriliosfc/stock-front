import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import {
    Form, Button, Container, Row, Col
} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from '../../services/User'
import { Redirect, Link } from 'react-router-dom';

const user = new User();
const notify = (msg) => toast(msg);

export default class CadastroUsuario extends Component {

    state = {
        nome: null,
        email: null,
        senha: null,
        loading: false,
        redirect: false
    }

    cadastrar = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        try {
            await user.create(this.state.nome, this.state.email, this.state.senha)
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
        if (this.state.redirect) {
            return <Redirect to={'/'} />
        }
        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Carregando...'
            >
                <ToastContainer />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4" className="login">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="nome"
                                        placeholder="Enter nome"
                                        value={this.state.nome}
                                        onChange={this.handleChange('nome')}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.handleChange('email')}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.senha}
                                        onChange={this.handleChange('senha')}
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