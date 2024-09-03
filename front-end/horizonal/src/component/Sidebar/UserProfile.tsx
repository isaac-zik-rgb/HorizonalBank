import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const UserProfile: React.FC = () => {
  return (
    <Row className="align-items-center border-top py-3">
      <Col>
        <div className="d-flex align-items-center">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da9ea20b50e8ba61feee865ec365930f4dc10ef717e43fd184b6f0b0b819fcc0?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt="Adrian Hajdin"
            roundedCircle
            width={40}
            height={40}
            className="me-3"
          />
          <div>
            <div className="fw-semibold">Adrian Hajdin</div>
            <div className="text-muted small">adrian@jsmastery.pro</div>
          </div>
        </div>
      </Col>
      <Col xs="auto">
        <Button variant="light" size="sm" aria-label="Settings">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7baf370aaefb596584e590a7ebf2c59e9e617fea35dd40d1e81ba28f9edb26f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt="Settings"
            style={{ width: "20px", aspectRatio: "1" }}
          />
        </Button>
      </Col>
    </Row>
  );
};

export default UserProfile;
