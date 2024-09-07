import { Container, Row, Col } from "react-bootstrap";
import MyComponent from "./WelcomeSection/MyComponent";
import Sidebar from "./Sidebar/Sidebar";
import UserProfile from "./Sidebar/UserProfile";

const Home = () => {
  const navItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f941129ce5eebf40c69d503af739a8e1ba988fca21d14a67ea1936cea8a649f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
      label: "Home",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92f53259e52095a21c3bf026735bb5526dffe0286eece5316ac612b3f161c3b5?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
      label: "My Banks",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4b84d10b81fbebc93d65489cf08225f346e6a5ec6e0d669fa1249355e66b518?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
      label: "Transaction History",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d13fdeb8645e5fd267104b57bd33e230ec0132b4351540e97afe3e9488be4e7d?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
      label: "Payment Transfer",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb0a70174842fb0deb5a89ce1df6eb6c63c21cfa691709448356dfa2481eed7f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
      label: "Connect Bank",
    },
  ];

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={3} className="p-0">
            <Sidebar navItems={navItems} />
          </Col>

          <Col xs={7} className="p-4">
            <MyComponent />
          </Col>
          <Row className="mt-auto">
            <UserProfile />
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
