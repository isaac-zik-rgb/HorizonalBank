import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import UserProfile from "./Sidebar/UserProfile";
import TransactionHistory from "./TransactionHistory";
import { useEffect, useState } from "react";
import { getTransactions } from "../DashBoard/AppUtils";

const TransactionHistroyPage = () => {
  const [transactions, setTransactionsData] = useState<any>(null);

  // Get the user transactions
  useEffect(() => {
    getTransactions()
      .then((data) => {
        console.log(data);
        setTransactionsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // interface Transaction {
  //   id: number;
  //   name: string;
  //   amount: string;
  //   status: string;
  //   date: string;
  //   category: string;
  // }
  //   const transactions: Transaction[] = [
  //     {
  //       id: 1,
  //       name: "Spotify",
  //       amount: "- $15.00",
  //       status: "Processing",
  //       date: "Wed 1:00pm",
  //       category: "Subscriptions",
  //     },
  //     {
  //       id: 2,
  //       name: "Alexa Doe",
  //       amount: "+ $88.00",
  //       status: "Success",
  //       date: "Wed 2:45am",
  //       category: "Deposit",
  //     },
  //     {
  //       id: 3,
  //       name: "JSM Pro",
  //       amount: "- $18.99",
  //       status: "Processing",
  //       date: "Mon 1:10pm",
  //       category: "Subscriptions",
  //     },
  //     {
  //       id: 4,
  //       name: "Fresh F&V",
  //       amount: "- $88.00",
  //       status: "Success",
  //       date: "Tue 12:15pm",
  //       category: "Groceries",
  //     },
  //     {
  //       id: 5,
  //       name: "Figma",
  //       amount: "- $18.99",
  //       status: "Processing",
  //       date: "Tue 6:10pm",
  //       category: "Income",
  //     },
  //     {
  //       id: 6,
  //       name: "Sam Sulek",
  //       amount: "- $40.20",
  //       status: "Declined",
  //       date: "Tue 5:40am",
  //       category: "Food and dining",
  //     },
  //   ];

  //NAvItem
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
            <TransactionHistory transactions={transactions} />
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

export default TransactionHistroyPage;
