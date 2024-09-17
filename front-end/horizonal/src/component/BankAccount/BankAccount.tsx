import React from "react";
import BankCard from "./BankCard";
import SpendingBar from "./SpendngBar";

interface BankAccountsProps {
  cards: CardProps[];
}

interface CardProps {
  accountName: string;
  holderName: string;
  cardNumber: string;
  expirationDate: string;
  spending: number;
  gradient: string;
  logoSrc: string;
  cardType: string;
}
const BankAccounts: React.FC<BankAccountsProps> = ({ cards }) => {
  return (
    <main className="container-fluid py-5">
      <header className="mb-4">
        <h1 className="display-4">My Bank Accounts</h1>
        <p className="lead text-muted">
          Effortlessly Manage Your Banking Activities
        </p>
      </header>
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4">Your cards</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbf41178e208ccff2a1ab57bf3c7ba74190208921d1a749b62b412ad30146751?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt=""
            className="img-fluid"
            style={{ width: "20px", cursor: "pointer" }}
            onClick={() => {
              console.log("clicked!");
            }}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {cards.map((card, index) => (
            <div key={index} className="col">
              <BankCard {...card} />
              <SpendingBar
                spending={Number(localStorage.getItem("spending"))}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BankAccounts;
