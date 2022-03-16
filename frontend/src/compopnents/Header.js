import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">AntSeller</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart">
                            <i className="fas fa-shopping-cart pe-1"/>
                                Panier
                            </ Nav.Link>
                            <Nav.Link href="/login">
                                <i className="fas fa-user pe-1"/>
                                Connexion
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
