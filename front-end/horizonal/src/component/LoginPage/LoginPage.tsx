import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./LoginForm";
import Logo from "./Logo";

const LoginPage: React.FC = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-white"
    >
      <Row className="w-100">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className="mx-auto" style={{ maxWidth: "360px" }}>
            <Logo />
            <LoginForm />
          </div>
        </Col>
        <Col md={6} className="d-none d-md-block">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e70ac39ae8f02b1c359c65add92bf8505ef06a63150c8fbf64e0d873edb068a3?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt=""
            className="img-fluid h-100 object-fit-cover"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
