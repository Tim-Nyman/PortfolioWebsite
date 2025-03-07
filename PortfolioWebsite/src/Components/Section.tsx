import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Tab, ListGroup, TabContent, Nav, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import AnimatedProgressBar from './AnimatedProgressBar';


function Example() {

  const [activeTab, setActiveTab] = useState<string>('#Backend');

  const handleTabSelect = (selectedKey: string | null) => {
    if (selectedKey) {
      setActiveTab(selectedKey);
    }
  };

  return (
    <>
      <div className="scroll-container">
        <section id="start" className="dark-section">
          <Container>
            <Row>
              <Col>
                <Image src="Images/Profile/Profile Picture.png" className="rounded-circle" alt="Tim's Portrait" />
              </Col>

              <Col className="section-col">
                <h2>Hi! I am Tim,</h2>
                <h2>a C# & .NET developer in the making</h2>
                <p>
                  .NET & C# Student - Always learning, Always improving.
                </p>
                <Button onClick={() => window.open('/CV Tim 2025.pdf', '_blank')} variant="primary outline-secondary" className="button-section">
                  Resume
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="skills" className="dark-section">
          <Container>
            <Tab.Container id="list-group-skills" activeKey={activeTab} onSelect={handleTabSelect}    >
              <Row>
                <Col sm={4} className="col-custom">
                  <ListGroup>
                    <ListGroup.Item action href="#Backend" className="custom-list-item">
                      Backend
                    </ListGroup.Item>

                    <ListGroup.Item action href="#Frontend" className="custom-list-item">
                      Frontend
                    </ListGroup.Item>

                    <ListGroup.Item action href="#Database" className="custom-list-item">
                      Database
                    </ListGroup.Item>

                    <ListGroup.Item action href="#Cloud" className="custom-list-item">
                      Cloud and Tools
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col sm={8} className="col-custom">
                  <TabContent className="custom-pane">
                    <Tab.Pane eventKey="#Backend">
                      <Image src="Images/Logos/CSharp.png" className="pane-image-backend"></Image>
                      <AnimatedProgressBar now={70} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Backend">
                      <Image src="Images/Logos/dot-net-core.png" className="pane-image-backend"></Image>
                      <AnimatedProgressBar now={54} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Backend">
                      <Image src="Images/Logos/asp.png" className="pane-image-backend"></Image>
                      <AnimatedProgressBar now={24} />
                    </Tab.Pane>
                  </TabContent>

                  <Tab.Content className="custom-pane">
                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/React.png" className="pane-image"></Image>
                      <AnimatedProgressBar now={65} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/TypeScript.png" className="pane-image"></Image>
                      <AnimatedProgressBar now={50} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/JavaScriptFinal.png" className="pane-image"></Image>
                      <AnimatedProgressBar now={50} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/Bootstrap2.png" className="pane-image"></Image>
                      <AnimatedProgressBar now={60} />
                    </Tab.Pane>
                  </Tab.Content>


                  <TabContent className="custom-pane">
                    <Tab.Pane eventKey="#Database">
                      <Image src="Images/Logos/azure.png" className="pane-image-sql"></Image>
                      <AnimatedProgressBar now={24} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Database">
                      <Image src="Images/Logos/MSSQL.png" className="pane-image-sql"></Image>
                      <AnimatedProgressBar now={70} />
                    </Tab.Pane>
                  </TabContent>

                  <TabContent className="custom-pane">
                    <Tab.Pane eventKey="#Cloud">
                      <Image src="Images/Logos/Microsoft_Azure_Logo.png" className="pane-image-cloud"></Image>
                      <AnimatedProgressBar now={34} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Cloud">
                      <Image src="Images/Logos/Azure DevOps.png" className="pane-image-cloud"></Image>
                      <AnimatedProgressBar now={18} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Cloud">
                      <Image src="Images/Logos/GitHub.png" className="pane-image-cloud"></Image>
                      <AnimatedProgressBar now={60} />
                    </Tab.Pane>
                  </TabContent>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>

        <section id="portfolio" className="dark-section">
          <Container>
            <Col className="col-custom">
              <Row>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="Images/Profile/Profile Picture.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Row>

              <Row>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="Images/Profile/Profile Picture.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Container>
        </section >
      </div>
    </>
  );
}

export default Example;