import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import UserProfile from "./UserProfile";

const navItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f941129ce5eebf40c69d503af739a8e1ba988fca21d14a67ea1936cea8a649f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
    label: "Home",
    isActive: true,
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

const Sidebar: React.FC = () => {
  return (
    <Container fluid className="h-100 border-end bg-white">
      <Row className="flex-column h-100">
        <Col className="pt-4">
          <header className="d-flex align-items-center mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79b29ef841da1d5714f986ea7bf42d67cb086967d81857a2d8c4f34c4199e1cc?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
              alt=""
              className="me-2"
              style={{ width: "33px", aspectRatio: "1.03" }}
            />
            <h1 className="h3 mb-0 fw-bold text-primary">Horizon</h1>
          </header>
          <SearchBar />
          <nav className="mt-4">
            <ul className="list-unstyled">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </ul>
          </nav>
        </Col>
        <Col className="mt-auto">
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
