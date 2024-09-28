import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import codezenith1 from "../../../assets/images/codezenith1.png";

interface Props {
  fullName: string;
  email: string;
}
const UserProfile: React.FC<Props> = ({ fullName, email }) => {
  return (
    <Row className="align-items-center border-top py-3">
      <Col xs="auto">
        <Image
          src={codezenith1}
          alt="Codezenith"
          roundedCircle
          width={40}
          height={40}
        />
      </Col>
      <Col>
        <div className="fw-semibold">{fullName}</div>
        <div className="text-muted small">{email}</div>
      </Col>
      <Col xs="auto">
        <Button
          variant="light"
          size="sm"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7baf370aaefb596584e590a7ebf2c59e9e617fea35dd40d1e81ba28f9edb26f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt="Settings"
            style={{ width: "20px", height: "20px" }}
          />
        </Button>
      </Col>
    </Row>
  );
};

export default UserProfile;
