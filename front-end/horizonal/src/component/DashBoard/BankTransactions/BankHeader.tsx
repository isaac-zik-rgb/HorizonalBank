import React from "react";

interface BankHeaderProps {
  bankName: string;
  accountType: string;
  balance: number;
}

const BankHeader: React.FC<BankHeaderProps> = ({
  bankName,
  accountType,
  balance,
}) => {
  return (
    <header className="card mb-4">
      <div className="card-body d-flex align-items-center">
        <div className="bg-primary text-white rounded-circle p-3 me-3">
          {bankName
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>
        <div>
          <h1 className="h4 mb-0">{bankName}</h1>
          <span className="badge bg-success me-2">{accountType}</span>
          <span className="text-primary fw-bold">${balance}</span>
        </div>
      </div>
    </header>
  );
};

export default BankHeader;
