import React from 'react';
import { Navbar, Container, Nav, Col, NavDropdown, Row } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <header>
            <Container fluid>
                <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className='navbar-shadow'>
                    <Navbar.Brand href="#start">
                        <Row>
                            <Col>
                                <img src="Images/Code blocks.png" alt="Logo" className="me-1" />
                                Tim Nyman
                            </Col>
                        </Row>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#start">0. Start</Nav.Link>
                            <Nav.Link href="#about">1. About</Nav.Link>
                            <Nav.Link href="#skills">2. Skills</Nav.Link>
                            <Nav.Link href="#Portfolio">3. Portfolio</Nav.Link>
                            <Nav.Link href="#Testimonials">4. Testimonials</Nav.Link>
                            <Nav.Link href="#Contact">5. Contact</Nav.Link>
                            <Nav.Link href="Resume/2024 CV Tim.pdf" target="_blank">6. Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;