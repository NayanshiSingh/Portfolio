import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';
import githubIcon from '../assets/img/githubIcon.svg';
import linkedinIcon from '../assets/img/linkedinIcon.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} height="100" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navBar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={activeLink === 'home' ? 'active nav-bar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={activeLink === 'skills' ? 'active nav-bar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={activeLink === 'projects' ? 'active nav-bar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/nayanshiSingh">
                <img src={githubIcon} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/nayanshi-singh-20a4162a9/">
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
            <Link to="/contact">
              <button className="vvd">
                <span>Let's Connect</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
