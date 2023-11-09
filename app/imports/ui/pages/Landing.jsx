import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container>
    <Row fluid className="hero-banner">
      <Col>
        <h1>WELCOME TO PONOHEALTH PROVIDERS</h1>
        <p>WHERE EVERYONE GETS EQUAL ACCESS</p>
      </Col>
    </Row>
    <Row className="my-5 help-section">
      <Col md={8} className="text-section">
        <h2 className="text-primary">NEED MEDICAL HELP?</h2>
        <h2>ANXIOUS BECAUSE YOU'RE UNINSURED OR UNDER-INSURED?</h2>
        <h2>TRYING TO FIND AFFORDABLE HEALTHCARE?</h2>
        <p>
          PonoHealth Providers aims to bridge the gap for the uninsured and under-insured, by enhancing healthcare
          accessibility, promoting informed decision-making, and fostering a community where quality health services are
          attainable for all, regardless of their financial circumstances.
        </p>
      </Col>
      <Col md={4} className="icon-section d-flex justify-content-center align-items-center">
        {/* Replace 'icon-class' with the actual class or path to your icon */}
        <i className="icon-class">[Your Icon Here]</i>
      </Col>
    </Row>
  </Container>
);

export default Landing;
