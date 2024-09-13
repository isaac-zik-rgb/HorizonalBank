import React from "react";
import { BankAccountSummary } from "./BankAccountSummary";
import { AddBankButton } from "./AddBankButton";

interface BankAccountsOverviewProps {
  accountCount: number;
  totalBalance: number | string;
}

export const BankAccountsOverview: React.FC<BankAccountsOverviewProps> = ({
  accountCount,
  totalBalance,
}) => {
  return (
    <section className="d-flex gap-3 align-items-center px-4">
      <div className="d-flex flex-wrap flex-grow-1 gap-3 align-items-start p-4 w-100 bg-white rounded border border-light shadow-sm">
        <BankAccountSummary accountCount={accountCount} />
        <div className="d-flex flex-column flex-grow-1 min-w-240px">
          <div className="d-flex flex-wrap gap-3 align-items-start w-100 fw-semibold">
            <h2 className="flex-grow-1 text-body fs-6">
              {accountCount} Bank Accounts
            </h2>
            <AddBankButton />
          </div>
          <div className="d-flex flex-column mt-3 w-100">
            <p className="text-muted small fw-medium">Total Current Balance</p>
            <p className="flex-grow-1 mt-2 fs-2 fw-semibold text-body">
              ${totalBalance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
