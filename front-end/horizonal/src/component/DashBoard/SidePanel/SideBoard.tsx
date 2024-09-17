import React from "react";
import BudgetSection from "./BudgetSection";
import DigitalCard from "./DigitalCards/DigitalCard";

interface BankingDashboardProps {
  cardNumber: string;
  cardHolderName: string;
  cvv: string;
  expiration: string;
  fullName: string;
  email: string;
  accountNumber: string;
}

const BankingDashboard: React.FC<BankingDashboardProps> = ({
  cardNumber,
  cardHolderName,
  cvv,
  expiration,
  fullName,
  email,
  accountNumber,
}) => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="card">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/532f1f4a18fa85cf9757e2037cff00e0ccced3eefe13106311f5fed200505b68?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          className="img-fluid w-100"
          alt="Banking dashboard header"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <h4>{fullName}</h4>
        <h6>{email}</h6>
        <div className="card-body">
          {/* <BankSection
            cardNumber={cardNumber}
            cardHolderName={cardHolderName}
            cvv={cvv}
          /> */}
          <DigitalCard
            cardHolderName={cardHolderName}
            cardNumber={cardNumber}
            cvv={cvv}
            expiration={expiration}
            accountNumber={accountNumber}
          />
          <BudgetSection />
        </div>
      </div>
    </main>
  );
};

export default BankingDashboard;
