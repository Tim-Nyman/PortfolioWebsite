import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <section id="start" className="dark-section">
        <Container>
          <Row>
            <Col>
              <Image src="Images/Profile Picture.png" className="rounded-circle" alt="Tim's Portrait" />
            </Col>

            <Col>
              <h2>Hi! I am Tim,</h2>
              <h2>a C# & .NET developer in the making</h2>
              <p>
                .NET & C# Student - Always learning, Always improving.
              </p>
            </Col>
            
          </Row>
        </Container>
      </section>






      {/* <Container>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Container> */}
    </>
  );
}

export default Example;