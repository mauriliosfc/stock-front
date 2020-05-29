import React, { Component } from "react";

import {
    Navbar, Nav, NavDropdown
} from "react-bootstrap"

class Menu extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Stock</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/app">Home</Nav.Link>
                        <NavDropdown title="Produtos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="CadastroProdutos">Cadastro</NavDropdown.Item>
                            <NavDropdown.Item href="ListaProdutos">Lista</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;