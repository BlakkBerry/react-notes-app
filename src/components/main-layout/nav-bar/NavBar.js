import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={NavLink} to="/">Reactive Notes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={NavLink} to="/notes">NOTES</Nav.Link>
                        <Nav.Link as={NavLink} to="/todo">TODO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default NavBar;