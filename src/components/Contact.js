import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import profilePhoto from '../assets/img/picture.png';

const Contact = () => {
  return (
    <Container className="contact-container">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </Col>
        <Col md={6}>
          <h1>Contact Me</h1>
          <p>
            <strong>Phone:</strong> +91 6306455363
          </p>
          <p>
            <strong>Email:</strong> nayanshisingh5124@gmail.com
          </p>
          <Button variant="primary" href="mailto:your-email@example.com">Email Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
