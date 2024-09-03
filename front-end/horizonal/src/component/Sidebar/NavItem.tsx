import React from "react";
import { Nav } from "react-bootstrap";

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false }) => {
  return (
    <Nav.Item>
      <Nav.Link
        className={`d-flex align-items-center py-2 ${
          isActive ? "active bg-primary text-white" : ""
        }`}
      >
        <img
          src={icon}
          alt=""
          className="me-3"
          style={{ width: "24px", aspectRatio: "1" }}
        />
        <span>{label}</span>
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavItem;
