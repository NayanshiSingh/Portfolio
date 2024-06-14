import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';
import githubIcon from '../assets/img/githubIcon.svg';
import linkedinIcon from '../assets/img/linkedinIcon.svg';
// import '../styles/NavBar.css'; // Import your custom CSS for Navbar

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} height="100" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={activeLink === 'home' ? 'active nav-bar-link' : 'navbar-link'}
              onClick={() => handleNavLinkClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={activeLink === 'skills' ? 'active nav-bar-link' : 'navbar-link'}
              onClick={() => handleNavLinkClick('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={activeLink === 'projects' ? 'active nav-bar-link' : 'navbar-link'}
              onClick={() => handleNavLinkClick('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <div className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/nayanshiSingh">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/nayanshi-singh-20a4162a9/">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
            <Link to="/contact">
              <button className="connect-button">
                <span>Let's Connect</span>
              </button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
