import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import UserProfile from "./Sidebar/UserProfile";
import PaymentTransfer from "./PaymentTransfer";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const TransferPage = () => {
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [remarks, setRemarks] = useState("");
  const [category, setCategory] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  // a function to handle transfer submition
  const handleSumbit = () => {
    //prepare the data
    const transferFunds = {
      accountId: Number(localStorage.getItem("accountId")),
      remarks: remarks,
      recipientEmail: email,
      recipientAcctNum: accountNumber,
      amount: amount,
      category: category,
    };
    console.log(transferFunds);

    //make an API call to send the data using fetch
    fetch("https://horizonalbank.onrender.com/api/transactions/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(transferFunds),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("Error processing transfer");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAlertType("success");
        setAlertMessage("Funds transferred successfully!");
      })
      .catch((error) => {
        console.log("Error occured: ", error);
        setAlertType("error");
        setAlertMessage(
          "Error transferring funds. Please try again Or check your transfer details."
        );
      });
  };

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
            {/* Conditional Alert Display */}
            {alertType === "success" && (
              <Alert variant="success" className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-check-circle-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0L12 7.09l-1.07-1.07L7.5 9.44 6.07 8.03 5 9.09l1.97 1.94z" />
                </svg>
                {alertMessage}
              </Alert>
            )}

            {alertType === "error" && (
              <Alert variant="danger">{alertMessage}</Alert>
            )}
            <PaymentTransfer
              setAccountNumber={setAccountNumber}
              setAmount={setAmount}
              setEmail={setEmail}
              setRemarks={setRemarks}
              handleTransfer={handleSumbit}
              setCategory={setCategory}
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

export default TransferPage;
