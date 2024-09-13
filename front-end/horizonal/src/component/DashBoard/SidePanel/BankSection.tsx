import React from "react";

interface BankSectionProps {
  cardNumber: string;
  cardHolderName: string;
  cvv: string;
}

const BankSection: React.FC<BankSectionProps> = ({
  cardNumber,
  cardHolderName,
  cvv,
}) => {
  return (
    <section className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">My Banks</h2>
        <button className="btn btn-outline-secondary btn-sm">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c399da9ef4960be3e3af74629aab6662f935cfca052d2d0977afa04241aef0c8?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt=""
            className="me-2"
            width="20"
            height="20"
          />
          Add bank
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <p className="mb-1">Card Number: {cardNumber}</p>
          <p className="mb-1">Card Holder: {cardHolderName}</p>
          <p className="mb-0">CVV: {cvv}</p>
        </div>
      </div>
    </section>
  );
};

export default BankSection;
