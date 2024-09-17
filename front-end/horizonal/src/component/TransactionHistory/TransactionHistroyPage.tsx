import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import UserProfile from "./Sidebar/UserProfile";
import TransactionHistory from "./TransactionHistory";
import { useEffect, useState } from "react";
import { getTransactions, getAcct, getUser } from "../DashBoard/AppUtils";

const TransactionHistroyPage = () => {
  const [transactions, setTransactionsData] = useState<any>(null);
  const [acct, setAcct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  // Get the user transactions

  useEffect(() => {
    setLoading(true);
    getTransactions(0)
      .then((data) => {
        setLoading(false);
        console.log(data);
        setTransactionsData(data);
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
        setAcct(data[0]);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        setLoading(false);
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
          <Col xs={8} className="p-5">
            <TransactionHistory
              transactions={transactions}
              balance={acct && acct.balance}
              accountName={acct && acct.account_name}
              accountNumber={acct && acct.account_number.slice(-4)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="mt-auto">
            <UserProfile
              fullName={
                userData && userData.first_name + " " + userData.last_name
              }
              email={userData && userData.email}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TransactionHistroyPage;
