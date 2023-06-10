import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export default function NavbarHeader() {
    const [isLogged, setLogIn] = useState("");
    // let user = localStorage.getItem("userData");
    // {user?setLogIn(true):setLogIn(false)}
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Inside</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Soccer</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                Nba
                            </NavDropdown.Item>
                        </NavDropdown>

                        {localStorage.getItem("userData") ?
                            <Nav.Link as={Link} to='/myaccount'>My Account</Nav.Link> :
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}