import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
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
                <p>You can reach me on:</p>
                <Button className="canvas-button" href="https://github.com/Tim-Nyman" target="_blank">
                    <Image src="/Images/Logos/GitHub.png" className="button-img"></Image>
                </Button>
                <Button className="canvas-button" href="https://www.linkedin.com/in/tim-nyman-16061b245/" target="_blank">
                    <Image src="/Images/Logos/Linkedin_Logo.png" className="button-img"></Image>
                </Button>
                {/* <Button className="canvas-button" href="https://www.linkedin.com/in/tim-nyman-16061b245/" target="_blank">
                    <Image src="/Images/Logos/outlook logo.png" className="button-img"></Image>
                </Button> */}
                <p>Or email me at: timnyman@live.com</p>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffCanvas;
