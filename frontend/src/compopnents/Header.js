import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >AntSeller</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">

                            <LinkContainer to="/cart">
                            <Nav.Link>
                                <i className="fas fa-shopping-cart pe-1"/>
                                    Panier
                                </ Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fas fa-user pe-1"/>
                                    Connexion
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
