import { Container, Row, Col } from "react-bootstrap";
import MyComponent from "./WelcomeSection/MyComponent";
import Sidebar from "./Sidebar/Sidebar";
import UserProfile from "./Sidebar/UserProfile";
import { getTransactions, getUser, getCards } from "./AppUtils";
import { getAcct } from "./AppUtils";
import { useEffect, useState } from "react";
import BankingDashboard from "./SidePanel/BankingDashBoard";
const Home = () => {
  const [userData, setUserData] = useState<any>(null);
  const [banks, setBanks] = useState<any>(null);
  const [transactionsData, setTransactionsData] = useState<any>(null);
  const [cardData, setCardData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((data) => {
        setLoading(false);
        setUserData(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    getAcct()
      .then((data) => {
        setLoading(false);
        setBanks(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getTransactions(5)
      .then((data) => {
        setTransactionsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //for digital cards retriever
  useEffect(() => {
    getCards()
      .then((data) => {
        setCardData(data[0]);
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

  if (banks != null) {
    localStorage.setItem("accountId", banks[0].id);
    localStorage.setItem("accountName", banks[0].account_name);
  }
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={3} className="p-0">
            <Sidebar navItems={navItems} />
          </Col>

          <Col xs={6} className="p-4">
            <MyComponent
              banks={banks ? banks : null}
              name={userData ? userData.first_name : ""}
              transactions={transactionsData ? transactionsData : null}
            />
          </Col>
          {/** Banking DashBoard */}
          <Col xs={3} className="p-4">
            {" "}
            <BankingDashboard
              cardHolderName={cardData ? cardData.holderName : ""}
              cardNumber={cardData ? cardData.cardNumber : ""}
              cvv={cardData ? cardData.cvv : ""}
              expiration={cardData ? cardData.expirationDate : ""}
              fullName={
                userData ? userData.first_name + " " + userData.last_name : ""
              }
              email={userData ? userData.email : ""}
              accountNumber={banks && banks[0].account_number}
            />
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

export default Home;
