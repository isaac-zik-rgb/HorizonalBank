import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { getUser } from "../../DashBoard/AppUtils";

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  const [loading, setLoading] = useState(true); // To handle the loading state
  const [error, setError] = useState<string | null>(null); // To handle any errors

  useEffect(() => {
    getUser()
      .then((data) => {
        setUserData(data); // Set the fetched user data
        setLoading(false); // Loading is complete
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load user data"); // Set the error message
        setLoading(false); // Ensure loading state ends even on error
      });
  }, []);

  // Show a loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }
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
        <div className="fw-semibold">
          {userData.first_name + " " + userData.last_name}
        </div>
        <div className="text-muted small">{userData.email}</div>
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
