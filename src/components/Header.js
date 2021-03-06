import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


export default function Header() {
    return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>All Projects</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/todo">
                    <Nav.Link>TODO'S</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/webapi">
                    <Nav.Link>WEBAPI</Nav.Link>
                </LinkContainer>

                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
    )
}


