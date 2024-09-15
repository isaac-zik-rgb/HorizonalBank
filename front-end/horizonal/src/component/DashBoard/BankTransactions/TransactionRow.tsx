import React from "react";

interface Transaction {
  recipient: string;
  image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e0cf7d73572d0f2935d85f37fa4f384acede48b7c7270d6c2e77198eb5a01df?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22";
}

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
  return (
    <td className="d-flex align-items-center">
      {transaction &&
      transaction.image &&
      transaction.image.startsWith("http") ? (
        <img
          src={transaction.image}
          alt={`${transaction.recipient} logo`}
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
      <span>{transaction.recipient}</span>
    </td>
  );
};

export default TransactionRow;
