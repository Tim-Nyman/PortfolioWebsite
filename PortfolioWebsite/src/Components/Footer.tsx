import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className = "bg-dark py-2 text-white footer-shadow">
            <Container>
                <Row>
                    <h3 className=''>
                        Hej
                    </h3>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;