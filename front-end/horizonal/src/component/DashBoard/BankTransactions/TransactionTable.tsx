import React from "react";
import TransactionRow from "./TransactionRow";

interface Transaction {
  recipient: string;
  image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e0cf7d73572d0f2935d85f37fa4f384acede48b7c7270d6c2e77198eb5a01df?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22";
  amount: string;
  isPositive: boolean;
  status: "Processing" | "Success" | "Declined";
  date: string;
  category: string;
  color?: string;
  icon?: string;
  sender: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions
            ? transactions.map((transaction, index) => (
                <tr key={index}>
                  <TransactionRow transaction={transaction} />
                  <td
                    className={`fw-bold ${
                      transaction.isPositive ? "text-success" : "text-danger"
                    }`}
                  >
                    {transaction.isPositive
                      ? "+$" + transaction.amount
                      : "-$" + transaction.amount}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        transaction.status === "Success"
                          ? "bg-success"
                          : transaction.status === "Declined"
                          ? "bg-danger"
                          : "bg-warning"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td>{transaction.date}</td>
                  <td>
                    <span className={`badge bg-primary`}>
                      <img
                        src={transaction.icon}
                        alt=""
                        className="me-1"
                        style={{ width: "12px", height: "12px" }}
                      />
                      {transaction.category}
                    </span>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
