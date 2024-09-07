import React from "react";
import TransactionTabs from "./TransactionTabs";
import ViewAllButton from "./ViewAllButton";

interface RecentTransactionsProps {
  banks: string[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ banks }) => {
  return (
    <section className="container mt-4">
      <header className="row">
        <div className="col d-flex justify-content-between align-items-center">
          <h2 className="h4 mb-0">Recent transactions</h2>
          <ViewAllButton />
        </div>
      </header>
      <TransactionTabs banks={banks} />
    </section>
  );
};

export default RecentTransactions;
