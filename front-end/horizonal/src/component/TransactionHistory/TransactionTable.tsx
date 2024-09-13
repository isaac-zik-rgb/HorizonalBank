import React from "react";
import TransactionRow from "./TransactionRow";

interface Transaction {
  id: number;
  name: string;
  amount: string;
  status: string;
  date: string;
  category: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Transaction</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <TransactionRow key={transaction.id} {...transaction} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
