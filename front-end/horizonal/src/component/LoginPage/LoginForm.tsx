import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Email: ", email);
    console.log("Password: ", password);
    //using fecth to send to the api
    fetch("https://horizonalbank.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("before loging response: ", response);
          throw new Error("Login failed");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("Login Successfully:", data);
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError("Incorrect email or password!!");
        console.log("Error: ", error);
      })
      .finally(() => {
        //stop loading
        setLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="h4 mb-3">Log in</h2>
      <p className="text-muted mb-4">
        Welcome back! Please enter your details.
      </p>
      {error && <Alert variant="danger">{error}</Alert>}

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button
        variant="primary"
        type="submit"
        className="w-100 mt-4"
        disabled={loading}
      >
        {loading && (
          <Spinner
            animation="border"
            size="sm"
            className="position-absolute top-50 start-50 translate-middle"
            style={{ width: "1rem", height: "1rem" }}
          />
        )}
        {loading ? "Logging in....." : "Login"}
      </Button>

      <p className="text-center mt-4 mb-0">
        Don't have an account?{" "}
        <a href="/signup" className="text-primary font-weight-bold">
          Sign up
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;
