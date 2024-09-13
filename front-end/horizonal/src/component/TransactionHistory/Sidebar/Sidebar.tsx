import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";

interface Props {
  navItems: NavItm[];
}

interface NavItm {
  icon: string;
  label: string;
}

const Sidebar: React.FC<Props> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  return (
    <Container fluid className="h-100 border-end">
      <Row className="flex-column h-100">
        <Col className="py-4">
          <header className="d-flex align-items-center mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79b29ef841da1d5714f986ea7bf42d67cb086967d81857a2d8c4f34c4199e1cc?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
              alt="Horizon logo"
              className="me-2"
              style={{ width: "33px", aspectRatio: "1.03" }}
            />
            <h1 className="h3 mb-0 text-primary">Horizon</h1>
          </header>
          <SearchBar />
          <nav className="mt-4">
            <ul className="list-unstyled">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  {...item}
                  index={index}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              ))}
            </ul>
          </nav>
        </Col>
        {/* <Col className="mt-auto py-5">
          <UserProfile />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Sidebar;
