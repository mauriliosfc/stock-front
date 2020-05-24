import React, { Component } from "react";

import {
    Form, Button, Container, Row, Col
} from "react-bootstrap"
import "./Login.css"
import auth from "../../services/auth"
import { Redirect } from "react-router-dom";

const Auth = new auth()

class Login extends Component {

    state = {
        email: "",
        senha: "",
        redirect: false
    }

    login = async (event) => {
        event.preventDefault();
        let session = await Auth.login(this.state.email, this.state.senha)
        localStorage.setItem('auth', session.auth);
        localStorage.setItem('token', session.token);
        this.setState({ redirect: true });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/app'} />
        }
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="4" className="login">
                        <Form>
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
                                onClick={this.login}
                                block variant="primary"
                                type="submit"
                            >
                                Acessar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Login