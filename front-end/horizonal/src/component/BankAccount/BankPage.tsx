import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import MyComponent from "../LoginPage/Alert";
import UserProfile from "../DashBoard/Sidebar/UserProfile";
import { useState, useEffect } from "react";
import { getCards } from "../DashBoard/AppUtils";
import BankAccounts from "./BankAccount";

const BankPage = () => {
  // get Cards
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          <Col xs={8} className="p-5">
            <BankAccounts cards={cards} />
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="mt-auto">
            <UserProfile />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BankPage;
