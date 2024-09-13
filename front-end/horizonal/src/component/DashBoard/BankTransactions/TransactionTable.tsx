import React from "react";
import TransactionRow from "./TransactionRow";

interface Transaction {
  name: string;
  image: string;
  amount: string;
  isPositive: boolean;
  status: "Processing" | "Success" | "Declined";
  date: string;
  category: {
    name: string;
    color: string;
    icon: string;
  };
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
                    {transaction.amount}
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
                    <span className={`badge ${transaction.category.color}`}>
                      <img
                        src={transaction.category.icon}
                        alt=""
                        className="me-1"
                        style={{ width: "12px", height: "12px" }}
                      />
                      {transaction.category.name}
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
