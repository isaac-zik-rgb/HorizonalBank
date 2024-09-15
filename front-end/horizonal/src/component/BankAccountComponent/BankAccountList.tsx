import React from "react";
import BankAccountItem from "./BankAccountItem";
import AddBankButton from "./AddBankButton";

interface BankAccount {
  id: string;
  account_name: string;
  balance: number;
  bgColor: "bg-success";
}

interface BankAccountListProps {
  handleSelectAccount: (accountName: string) => void;
  bankAccounts: BankAccount[];
}

const BankAccountList: React.FC<BankAccountListProps> = ({
  handleSelectAccount,
  bankAccounts,
}) => {
  return (
    <section className="card shadow-lg" style={{ maxWidth: "400px" }}>
      <header className="card-header bg-white border-bottom">
        <h2 className="h5 mb-0">Bank Accounts</h2>
      </header>
      {bankAccounts.map((account) => (
        <div
          key={account.id}
          onClick={() => {
            localStorage.setItem("accountId", account.id);
            handleSelectAccount(account.account_name);
          }}
          style={{ cursor: "pointer" }}
        >
          <BankAccountItem account={account} />
        </div>
      ))}
      <AddBankButton />
    </section>
  );
};

export default BankAccountList;
