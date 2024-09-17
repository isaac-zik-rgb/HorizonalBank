import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { getUser } from "../../DashBoard/AppUtils";

interface Props {
  fullName: string;
  email: string;
}
const UserProfile: React.FC<Props> = ({ fullName, email }) => {
  return (
    <Row className="align-items-center border-top py-3">
      <Col xs="auto">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/da9ea20b50e8ba61feee865ec365930f4dc10ef717e43fd184b6f0b0b819fcc0?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          alt="Adrian Hajdin"
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
