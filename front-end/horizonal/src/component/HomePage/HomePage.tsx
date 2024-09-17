import React from "react";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
// import "./HomePage.css"; // For any custom styling

const HomePage: React.FC = () => {
  return (
    <div className="homepage bg-light">
      {/* Navigation bar with Login and Signup buttons */}
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">
            Horizonal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button
                variant="outline-primary"
                href="/login"
                className="me-3 px-4"
              >
                Login
              </Button>
              <Button variant="primary" href="/signup" className="px-4">
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="hero-section text-center py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold">Welcome to Horizonal</h1>
            <p className="lead text-muted my-4">
              <h2>Empowering Your Financial Future</h2>
            </p>
            <p>
              Horizonal is a comprehensive financial management tool designed to
              simplify your financial life. Whether you're managing personal
              finances, budgeting for future goals, or tracking investments, our
              app offers a suite of powerful features to keep you in control of
              your money.
            </p>
            <div className="mt-4">
              <Button
                variant="primary"
                size="lg"
                href="/signup"
                className="me-3"
              >
                Get Started
              </Button>
              <Button variant="outline-secondary" size="lg" href="/about">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p className="mb-0">© 2024 Horizonal. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
