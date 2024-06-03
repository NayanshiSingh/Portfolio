import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h1>Skills</h1>
                        <ul>
                            <li>
                            <h3>Data Structures and Algorithms (DSA) in Java - Intermediate Level</h3>
                                <ul>
                                    <li>Proficient in designing and implementing fundamental data structures like arrays, linked lists, stacks, queues, trees, and graphs.</li>
                                    <li>Familiar with various sorting and searching algorithms, including their time and space complexities.</li>
                                    <li>Experience in problem-solving and coding exercises, utilizing DSA concepts to develop efficient solutions.</li>
                                </ul>
                            </li>
                            <hr />
                            <li>
                            <h3>Spring Framework for Backend Development - Beginner Level</h3>
                                <ul>
                                    <li>Basic understanding of the Spring framework and its core components, such as Dependency Injection and Inversion of Control principles.</li>
                                    <li>Exposure to building RESTful APIs using Spring Boot and handling HTTP requests and responses.</li>
                                    <li>Familiarity with integrating databases (e.g., MySQL, PostgreSQL) into Spring applications.</li>
                                </ul>

                            </li>
                            <hr />
                            <li>
                            <h3>HTML and CSS - Intermediate Level</h3>
                                <ul>
                                    <li>Solid grasp of HTML semantics, structure, and elements for creating well-structured web pages.</li>
                                    <li>Proficient in styling web pages using CSS selectors, properties, and values.</li>
                                    <li>Understanding of layout techniques, such as floats, positioning, and flexbox.</li>
                                    <li>Experience in enhancing visual aesthetics through typography, colors, and responsive design principles.</li>
                                    <li>Familiarity with accessibility practices and writing semantic markup for better user experiences.</li>
                                </ul>
                            </li>
                            <hr />
                            <li>
                            <h3>JavaScript - Beginner Level</h3>
                                <ul>
                                    <li>Basic knowledge of JavaScript syntax, data types, variables, and control structures.</li>
                                    <li>Familiarity with DOM manipulation and handling user events.</li>
                                    <li>Exposure to JavaScript libraries and frameworks (e.g., React, Angular, Vue.js) for building interactive web applications.</li>
                                </ul>

                            </li>

                        </ul>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2}  alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data Structures and Algorithm</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}