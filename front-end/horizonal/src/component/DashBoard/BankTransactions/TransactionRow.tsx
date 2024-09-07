import React from "react";

interface Transaction {
  name: string;
  image: string;
}

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
  return (
    <td className="d-flex align-items-center">
      {transaction.image.startsWith("http") ? (
        <img
          src={transaction.image}
          alt={`${transaction.name} logo`}
          className="rounded-circle me-2"
          style={{ width: "40px", height: "40px" }}
        />
      ) : (
        <div
          className="bg-light rounded-circle me-2 d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          {transaction.image}
        </div>
      )}
      <span>{transaction.name}</span>
    </td>
  );
};

export default TransactionRow;
