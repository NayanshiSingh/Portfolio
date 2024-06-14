import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Event-Count-Down",
      description: "Design & Development",
      imgUrl: projImg1,
      gitUrl: "https://github.com/NayanshiSingh/Event-CountDoown"
    },
    {
      title: "Parking-Lot",
      description: "backend Development",
      imgUrl: projImg2,
      gitUrl: "https://github.com/NayanshiSingh/ParkingLot"
    },
    {
      title: "Quick-Quiz",
      description: "Design & Development",
      imgUrl: projImg3,
      gitUrl: "https://github.com/NayanshiSingh/Quick-Quiz"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Design & Development",
      imgUrl: projImg4,
      gitUrl : "https://github.com/NayanshiSingh/TicTacToe"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h1>Projects</h1>
                <p>
                    As an enthusiastic newcomer to software development, this project portfolio represents the foundation I'm building upon. While the projects may be modest in scale, they symbolize my dedication and continuous growth over the past few months.<br/>
                    I am particularly excited about the potential of Artificial Intelligence and Machine Learning. As I expand my knowledge in these domains, I aim to incorporate their capabilities into future projects, creating innovative solutions.<br/>
                    This portfolio is a living testament to my progress, and I invite you to join me on this exciting journey as I refine my skills and explore new frontiers in software development.
                    <hr/>
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects Name</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}