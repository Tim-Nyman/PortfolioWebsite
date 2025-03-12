import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Col, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../Styles/Header.css"
import OffCanvas from './OffCanvas';


const Header: React.FC = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);
    
    useEffect(() => {
        document.body.setAttribute("data-bs-spy", "scroll");
        document.body.setAttribute("data-bs-target", "#navbar-nav");
        document.body.setAttribute("data-bs-offset", "50");
        document.body.classList.add("scrollspy-example");
    }, []);

    return (
        <header>
            <Container>
                <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className="navbar-shadow">
                    <Container>
                        <Navbar.Brand href="#start">
                            <Row className="align-items-center">
                                <Col>
                                    <h2>
                                        Tim Nyman
                                    </h2>
                                </Col>

                                <Col className="section-col">
                                    <Button href="https://github.com/Tim-Nyman" target="_blank" className="header-button">
                                        <Image src="Images/Logos/GitHub.png" className="button-img" fluid></Image>
                                    </Button>
                                </Col>
                            </Row>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#start">0. Start</Nav.Link>
                                <Nav.Link href="#skills">1. Skills</Nav.Link>
                                <Nav.Link href="#portfolio">2. Portfolio</Nav.Link>
                                <Nav.Link href="#contact" onClick={handleShow}>3. Contact</Nav.Link>
                                <Nav.Link href="/CV_Tim_2025.pdf" target="_blank">4. Resume</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

            <OffCanvas show={showOffcanvas} handleClose={handleClose} />
        </header>
    );
};

export default Header;