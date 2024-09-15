import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  index: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  index,
  selectedIndex,
  setSelectedIndex,
}) => {
  const navigate = useNavigate();

  const handleSelect = (index: number) => {
    console.log(index);
    if (index == 0) {
      navigate("/dashboard/home");
    }
    if (index == 1) {
      navigate("/dashboard/bank");
    }
    if (index == 2) {
      navigate("/dashboard/transactionHistory");
    }
    if (index == 3) {
      navigate("/dashboard/transfer");
    }
  };

  return (
    <Nav.Item>
      <Nav.Link
        className={`d-flex align-items-center py-2 ${
          selectedIndex == index ? "bg-primary text-white" : ""
        }`}
        onClick={() => {
          setSelectedIndex(index);
          handleSelect(index);
        }}
      >
        <img
          src={icon}
          alt=""
          className="me-3"
          style={{ width: "24px", height: "24px" }}
        />
        <span>{label}</span>
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavItem;
