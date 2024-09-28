import React from "react";
import BudgetSection from "./BudgetSection";
import DigitalCard from "./DigitalCards/DigitalCard";
import codezenith1 from "../../../assets/images/codezenith1.png";

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
          src={codezenith1}
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
