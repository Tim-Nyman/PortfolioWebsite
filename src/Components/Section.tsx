import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../Styles/Section.css"
import SectionHeader from "./SectionHeaders/SectionHeader";


function Example() {

  return (
    <>
      {/* Hero section */}
      <div className="scroll-container">
        <section id="start" className="section-design">
          <Container>
            <Row>
              <Col lg={6}>
                <Image src="Images/Profile/Profile_Picture.png" className="rounded-circle" alt="Tim's Portrait" fluid />
              </Col>
              <Col className="section-col my-3 text-design">
                <h2>Hi! I am Tim,</h2>
                <h2>a C# & .NET developer in the making</h2>
                <p>
                  .NET & C# Student - Always learning, Always improving.
                </p>
                <Button href="CV_Tim_2025.pdf" target="blank" variant="primary outline-secondary" className="button-section">
                  Resume
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Skill tabs */}
        <section id="skills" className="section-design">
          <Container>
            <Row>
              <SectionHeader selectedSectionName="SKILLS" />

              <Row className="text-start justify-content-center">
                <Col lg={7}>
                  <p className="text-design p-text my-lg-2">
                    I excel at breaking down complex problems into smaller, more manageable tasks, making my code
                    more maintainable and readable. I am driven by challenges and I'm always striving to improve
                    and continuously seek opportunities to enhance my skills. My open-mindedness allows me to quickly grasp
                    and adapt to new technologies.
                  </p>
                </Col>

                <Col lg={1}></Col>

                <Col className="d-flex flex-wrap justify-content-center lg-p-3 sm-pt-2" lg={4} xs={12}>
                  <Image src="Images/Logos/Logo_C_sharp.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/dotnet-logo.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/aspnet.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/React-icon.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/Typescript_logo.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/JavaScript_logo.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/Bootstrap_logo.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/Azure_sql.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/azure_icon.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/Azure-DevOps.svg" className="image-size image-tranform" fluid></Image>
                  <Image src="Images/Logos/github-icon-1-logo-svgrepo-com.svg" className="image-size image-tranform" fluid></Image>
                </Col>
              </Row>

              <Row>
                <h1 className="text-start h1-bracket">{"}"}</h1>
              </Row>
            </Row>
          </Container>
        </section>

        {/* Portfolio Cards */}
        <section id="projects" className="section-design">
          <Container fluid>
            <Container>
              <Row className="pb-lg-4">
                <SectionHeader selectedSectionName="PROJECTS" />
              </Row>

              <Row className="card-row">
                <Col lg={5} className="card-container">
                  <a href="https://github.com/Tim-Nyman/PortfolioWebsite" target="_blank" className="card-design">
                    <Image src="Images/Cards/PortfolioWebsitePicture.png" className="card-design-image" fluid></Image>
                  </a>
                  <h1 className="text-design-card-h1 resize-text pt-lg-5">
                    Portfolio
                  </h1>
                  <p className="card-text text-design remove-text">
                    This website is built using TypeScript, React and Bootstrap as a learning opportunity.
                  </p>
                </Col>

                <Col lg={5} className="card-container">
                  <a href="https://github.com/Tim-Nyman/OOAD-Project" target="_blank" className="card-design">
                    <Image src="Images/Logos/solid-logotype.png" className="card-design-image" fluid></Image>
                  </a>
                  <h1 className="text-design-card-h1 resize-text pt-lg-5">
                    OOAD App
                  </h1>
                  <p className="card-text text-design remove-text">
                    Console application where the focus was on OOAD and following design patterns.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg={12} className="text-start text-design-h1">
                  <h1 className="h1-bracket">{"}"}</h1>
                </Col>
              </Row>
            </Container>
          </Container>
        </section >
      </div>
    </>
  );
}
export default Example;