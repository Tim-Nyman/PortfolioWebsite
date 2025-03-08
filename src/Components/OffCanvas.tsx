import React from 'react';
import { Offcanvas, Button, Col, Row } from 'react-bootstrap';
import "../Styles/Header.css"
import Image from 'react-bootstrap/Image'


interface OffCanvasProps {
    show: boolean;
    handleClose: () => void;

}

const OffCanvas: React.FC<OffCanvasProps> = ({ show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} className="custom-offcanvas" >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contact</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Row  className="justify-content-md-center">
                        <p>You can reach me on:</p>
                    <Col md="auto" className="my-3">
                        <Button className="canvas-button" href="https://github.com/Tim-Nyman" target="_blank">
                            <Image src="Images/Logos/GitHub.png" className="button-img" fluid></Image>
                        </Button>
                    </Col>
                    <Col md="auto" className="my-3">
                        <Button className="canvas-button" href="https://www.linkedin.com/in/tim-nyman-16061b245/" target="_blank">
                            <Image src="Images/Logos/LinkedIn.png" className="button-img" fluid></Image>
                        </Button>
                    </Col>
                        <p>Or email me at: timnyman@live.com</p>                    
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffCanvas;
