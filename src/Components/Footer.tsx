import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "../Styles/footer.css";

const Footer: React.FC = () => {
    return (
        <footer className = "bg-dark py-2 text-white footer-shadow">
            <Container className="footer-container">
                <Row>
                    <p className="footer-text">
                        Website made by Tim using React+Boostrap, TypeScript, and VITE.
                    </p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;