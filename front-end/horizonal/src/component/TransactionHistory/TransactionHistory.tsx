import React from "react";
import AccountSelector from "./AccountSelector";
import AccountSummary from "./AccountSummary";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import FilterButton from "./FilterButton";

interface Transaction {
  id: number;
  recipient: string;
  amount: string;
  status: string;
  date: string;
  category: string;
  isPositive: boolean;
}
interface TransactionHistoryProps {
  transactions: Transaction[];
  accountName: string;
  balance: number;
  accountNumber: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
  accountName,
  balance,
  accountNumber,
}) => {
  return (
    <main className="py-5 bg-light">
      <div className="container">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-0">Transaction history</h1>
            <p className="text-muted">
              Gain Insights and Track Your Transactions Over Time
            </p>
          </div>
          <AccountSelector />
        </header>
        <AccountSummary
          accountName={accountName}
          balance={balance}
          accountNumber={accountNumber}
        />
        <section className="mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 mb-0">Transaction history</h2>
            <FilterButton />
          </div>
          <TransactionTable transactions={transactions} />
          {transactions && transactions.length > 1 ? <Pagination /> : ""}
        </section>
      </div>
    </main>
  );
};

export default TransactionHistory;
