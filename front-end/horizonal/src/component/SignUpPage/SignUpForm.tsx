import { Form, Row, Col, Container, Alert, Spinner } from "react-bootstrap";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import Logo from "./Logo";

interface SignUpFormProps {
  onSubmit: (formData: FormData) => void;
  alertMessage?: string;
  alertType?: "success" | "danger";
  loading?: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  alertMessage,
  alertType,
  loading,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    onSubmit(formData);
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="w-75">
            <Logo />
            <h1 className="mt-5 mb-3">Sign up</h1>
            <p className="text-muted mb-4">Please enter your details.</p>
            {alertMessage && <Alert variant={alertType}>{alertMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <InputField
                    label="FirstName"
                    name="first_name"
                    placeholder="John"
                    required
                  />
                </Col>
                <Col md={6}>
                  <InputField
                    label="Last Name"
                    name="last_name"
                    placeholder="Doe"
                    required
                  />
                </Col>
              </Row>
              <InputField
                label="Address"
                name="address"
                placeholder="Enter your specific address"
                required
              />
              <Row>
                <Col md={6}>
                  <InputField label="State" name="state" placeholder="NY" />
                </Col>
                <Col md={6}>
                  <InputField
                    label="Postal Code"
                    name="postal_code"
                    placeholder="11101"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <InputField
                    label="Date of Birth"
                    name="date_of_birth"
                    placeholder="yyyy-mm-dd"
                    required
                  />
                </Col>
                <Col md={6}>
                  <InputField
                    label="SSN"
                    name="ssn"
                    placeholder="111-11-1111"
                    type="ssn"
                    required
                  />
                </Col>
              </Row>
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />

              <SubmitButton className="w-100 mt-4" disabled={loading}>
                {loading && (
                  <Spinner
                    animation="border"
                    size="sm"
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ width: "1rem", height: "1rem" }}
                  />
                )}
                {loading ? "Signing up....." : "Sign Up"}
              </SubmitButton>
            </Form>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-primary">
                Login
              </a>
            </p>
          </div>
        </Col>
        <Col md={6} className="d-none d-md-block">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12b0564e5d264a5441475849abff05cddf2cb164d604e59238c4a701c7e486dd?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt="Decorative background"
            className="img-fluid h-100 object-fit-cover"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
