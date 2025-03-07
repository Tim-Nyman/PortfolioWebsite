import React, { useEffect } from 'react';
import { Navbar, Container, Nav, Col, NavDropdown, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


const Header: React.FC = () => {

    useEffect(() => {
        document.body.setAttribute("data-bs-spy", "scroll");
        document.body.setAttribute("data-bs-target", "#navbar-nav");
        document.body.setAttribute("data-bs-offset", "50");
        document.body.classList.add("scrollspy-example");
    }, []);

    return (
        <header>
            <Container>
                <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className='navbar-shadow'>
                    <Container>
                        <Navbar.Brand href="#start">
                            <Row className="custom-padding">
                                <Col>
                                    <h2>
                                        Tim Nyman
                                    </h2>
                                </Col>

                                <Col className="section-col">
                                    <Button href="https://github.com/Tim-Nyman" target="_blank" className="header-button">
                                        <Image src="Images/Logos/GitHub.png" className="button-img"></Image>
                                    </Button>
                                </Col>
                            </Row>
                        </Navbar.Brand>
                    </Container>

                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#start">0. Start</Nav.Link>
                            <Nav.Link href="#skills">1. Skills</Nav.Link>
                            <Nav.Link href="#portfolio">2. Portfolio</Nav.Link>
                            <Nav.Link href="#contact">3. Contact</Nav.Link>
                            <Nav.Link href="Resume/2024 CV Tim.pdf" target="_blank">4. Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;