import React from "react";
import WelcomeSection from "./WelcomeSection";
import { BankAccountsOverview } from "../BankBalance/BankAccountOverview";
import RecentTransactions from "../RecentTransactions";
import BankTransactions from "../BankTransactions/BankTransactions";
const MyComponent: React.FC = () => {
  const banks = ["Chase Bank", "Bank of America", ""];
  return (
    <main>
      <WelcomeSection
        name="Adrian"
        description="Access & manage your account and transactions efficiently."
      />

      <BankAccountsOverview accountCount={2} totalBalance="24.500" />
      <RecentTransactions banks={banks} />
      <BankTransactions />
    </main>
  );
};

export default MyComponent;
