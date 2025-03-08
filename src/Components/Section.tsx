import { useState } from 'react';
import { Container, Row, Col, Button, Tab, ListGroup, TabContent, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import AnimatedProgressBar from './AnimatedProgressBar';
import "../Styles/Section.css"


function Example() {

  const [activeTab, setActiveTab] = useState<string>('#Backend');

  const handleTabSelect = (selectedKey: string | null) => {
    if (selectedKey) {
      setActiveTab(selectedKey);
    }
  };

  return (
    <>
      {/* Hero section */}
      <div className="scroll-container">
        <section id="start" className="dark-section">
          <Container fluid="xl">
            <Row>
              <Col lg={true}>
                <Image src="Images/Profile/Profile_Picture.png" className="rounded-circle" alt="Tim's Portrait" fluid />
              </Col>
              <Col className="section-col my-3">
                <h2>Hi! I am Tim,</h2>
                <h2>a C# & .NET developer in the making</h2>
                <p>
                  .NET & C# Student - Always learning, Always improving.
                </p>
                <Button onClick={() => window.open('CV_Tim_2025.pdf', '_blank')} variant="primary outline-secondary" className="button-section">
                  Resume
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Skill tabs */}
        <section id="skills" className="dark-section">
          <Container fluid>
            <Row className="justify-content-center">
              <Tab.Container id="list-group-skills" activeKey={activeTab} onSelect={handleTabSelect}>
                <Col md={6} className="col-custom-list ">
                  <Container>
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
                  </Container>
                </Col>

                <Col md={4} className="col-custom custom-padding">
                  <Container>
                    {/* Backend */}
                    <TabContent>
                      <Tab.Pane eventKey="#Backend">
                        <Image src="Images/Logos/CSharp.png" className="pane-image-backend" fluid></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={70} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Backend">
                        <Image src="Images/Logos/dot-net-core.png" className="pane-image-backend" fluid></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={65} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Backend">
                        <Image src="Images/Logos/asp.png" className="pane-image-backend" fluid></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={60} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>
                    </TabContent>

                    {/* Frontend */}
                    <Tab.Content>
                      <Tab.Pane eventKey="#Frontend">
                        <Image src="Images/Logos/React.png" className="pane-image" fluid></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={65} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Frontend">
                        <Image src="Images/Logos/TypeScript.png" className="pane-image" fluid></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={50} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Frontend">
                        <Image src="Images/Logos/JavaScriptFinal.png" className="pane-image" fluid></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={50} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Frontend">
                        <Image src="Images/Logos/Bootstrap2.png" className="pane-image" fluid></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={60} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>

                    {/* Database */}
                    <TabContent>
                      <Tab.Pane eventKey="#Database">
                        <Image src="Images/Logos/azure.png" className="pane-image-sql"></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={65} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Database">
                        <Image src="Images/Logos/MSSQL.png" className="pane-image-sql"></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={70} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>
                    </TabContent>

                    {/* Cloud and Tools */}
                    <TabContent>
                      <Tab.Pane eventKey="#Cloud">
                        <Image src="Images/Logos/Microsoft_Azure_Logo.png" className="pane-image-cloud"></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={47} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Cloud">
                        <Image src="Images/Logos/Azure_DevOps.png" className="pane-image-cloud"></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={54} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="#Cloud">
                        <Image src="Images/Logos/GitHub.png" className="pane-image-cloud"></Image>
                        <div className="progress-container">
                          <p className="text-left">Novice</p>
                          <AnimatedProgressBar now={72} />
                          <p className="text-right">Advanced</p>
                        </div>
                      </Tab.Pane>

                    </TabContent>
                  </Container>
                </Col>
              </Tab.Container>
            </Row>
          </Container>
        </section>

        {/* Portfolio Cards */}
        <section id="portfolio" className="dark-section">
          <Container>
            <Row>
              <Col className="col-custom-cards">
                <Card className="card-styling">
                  <Card.Img variant="top" src="Images/Cards/PortfolioWebsiteCardPicture.png" className="card-image" />
                  <Card.Body>
                    <Card.Title>Portfolio Website</Card.Title>
                    <Card.Text>
                      My code for this website, built primarly on React+Bootstrap, TypeScript and VITE.
                    </Card.Text>
                    <Button href="https://github.com/Tim-Nyman/PortfolioWebsite" target="_blank" variant="dark" className="card-button">GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="col-custom-cards">
                <Card className="card-styling">
                  <Card.Img variant="top" src="Images/Cards/OOADBowling.png" className="card-image" />
                  <Card.Body>
                    <Card.Title>OOAD Project</Card.Title>
                    <Card.Text>
                      Building using design patterns and following the SOLID-principles.
                    </Card.Text>
                    <Button href="https://github.com/Tim-Nyman/OOAD-Project" target="_blank" variant="dark" className="card-button">GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        </section >
      </div>
    </>
  );
}

export default Example;