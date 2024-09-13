import React from "react";
import TransactionTabs from "./TransactionTabs";
import ViewAllButton from "./ViewAllButton";

interface RecentTransactionsProps {
  banks: Props[];
}
interface Props {
  id: number;
  account_name: string;
  balance: number;
  account_number: string;
  account_type: string;
  creation_date: string;
  active?: boolean;
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
