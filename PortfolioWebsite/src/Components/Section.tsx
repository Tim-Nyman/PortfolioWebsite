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

        {/* Skill tabs */}
        <section id="skills" className="dark-section">
          <Container>
            <Tab.Container id="list-group-skills" activeKey={activeTab} onSelect={handleTabSelect}>
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

                {/* Backend */}
                <Col sm={8} className="col-custom">
                  <TabContent className="custom-pane">
                    <Tab.Pane eventKey="#Backend">
                      <Image src="Images/Logos/CSharp.png" className="pane-image-backend"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={70} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Backend">
                      <Image src="Images/Logos/dot-net-core.png" className="pane-image-backend"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={54} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Backend">
                      <Image src="Images/Logos/asp.png" className="pane-image-backend"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={24} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>
                  </TabContent>

                  {/* Frontend */}
                  <Tab.Content className="custom-pane">
                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/React.png" className="pane-image"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={65} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/TypeScript.png" className="pane-image"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={50} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/JavaScriptFinal.png" className="pane-image"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={50} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Frontend">
                      <Image src="Images/Logos/Bootstrap2.png" className="pane-image"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={60} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>

                  {/* Database */}
                  <TabContent className="custom-pane">
                    <Tab.Pane eventKey="#Database">
                      <Image src="Images/Logos/azure.png" className="pane-image-sql"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={24} />
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
                  <TabContent className="custom-pane">
                    <Tab.Pane eventKey="#Cloud">
                      <Image src="Images/Logos/Microsoft_Azure_Logo.png" className="pane-image-cloud"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={34} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Cloud">
                      <Image src="Images/Logos/Azure DevOps.png" className="pane-image-cloud"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={18} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Cloud">
                      <Image src="Images/Logos/GitHub.png" className="pane-image-cloud"></Image>
                      <div className="progress-container">
                        <p className="text-left">Novice</p>
                        <AnimatedProgressBar now={60} />
                        <p className="text-right">Advanced</p>
                      </div>
                    </Tab.Pane>
                  </TabContent>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>

        {/* Portfolio Cards */}
        <section id="portfolio" className="dark-section">
          <Container>
            <Col className="col-custom">
              <Row>
                <Card className="card-styling">
                  <Card.Img variant="top" src="Images/Cards/PortfolioWebsiteCardPicture.png" className="card-image" />
                  <Card.Body>
                    <Card.Title>Portfolio Website</Card.Title>
                    <Card.Text>
                      My code for this website, built primarly on React+Bootstrap, TypeScript and VITE.
                    </Card.Text>
                    <Button onClick={() => window.open("https://github.com/Tim-Nyman/PortfolioWebsite", '_blank')} variant="dark" className="card-button">GitHub</Button>
                  </Card.Body>
                </Card>
              </Row>

              <Row>
                <Card className="card-styling">
                  <Card.Img variant="top" src="Images/Cards/OOADBowling.png" className="card-image" />
                  <Card.Body>
                    <Card.Title>OOAD Project</Card.Title>
                    <Card.Text>
                      OOAD Project with focus on building using design patterns and following the SOLID-principles.
                    </Card.Text>
                    <Button onClick={() => window.open("https://github.com/Tim-Nyman/OOAD-Project", '_blank')} variant="dark" className="card-button">GitHub</Button>
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