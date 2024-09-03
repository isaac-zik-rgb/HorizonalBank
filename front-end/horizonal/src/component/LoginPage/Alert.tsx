import React from "react";
import { Alert } from "react-bootstrap";

const MyComponent: React.FC = () => {
  return (
    <div>
      <Alert variant="success">This is a success message!</Alert>
      <Alert variant="danger">This is an error message!</Alert>
      <Alert variant="warning">This is a warning message!</Alert>
      <Alert variant="info">This is an informational message!</Alert>
    </div>
  );
};

export default MyComponent;
