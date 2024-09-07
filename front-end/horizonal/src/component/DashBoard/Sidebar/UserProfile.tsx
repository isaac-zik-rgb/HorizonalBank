import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const UserProfile: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const getUser = () => {
    try {
      fetch("https://horizonalbank.onrender.com/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response);
            throw new Error("failed to fetch user");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Use useEffect to call getUser when the component loads
  useEffect(() => {
    getUser();
  }, []); // Empty dependency array means this runs only once after the initial render

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
        <div className="fw-semibold">Adrian Hajdin</div>
        <div className="text-muted small">adrian@jsmastery.pro</div>
      </Col>
      <Col xs="auto">
        <Button variant="light" size="sm">
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
