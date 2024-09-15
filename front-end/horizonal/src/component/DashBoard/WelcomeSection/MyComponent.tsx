import React from "react";
import WelcomeSection from "./WelcomeSection";
import { BankAccountsOverview } from "../BankBalance/BankAccountOverview";
import RecentTransactions from "../RecentTransactions";
import BankTransactions from "../BankTransactions/BankTransactions";

interface BanksProps {
  banks: Props[];
  name: string;
  transactions: TransactionProps[];
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

interface TransactionProps {
  recipient: string;
  image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e0cf7d73572d0f2935d85f37fa4f384acede48b7c7270d6c2e77198eb5a01df?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22";
  amount: string;
  isPositive: boolean;
  status: "Processing" | "Success" | "Declined";
  date: string;
  category: string;
  color: "bg-primary";
  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00047ad5237897fbe7f4f0a060e6428c6dd2c73240b5e5b52c386dd7f342e11f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22";
}

const MyComponent: React.FC<BanksProps> = ({ banks, name, transactions }) => {
  return (
    <main>
      <WelcomeSection
        name={name}
        description="Access & manage your account and transactions efficiently."
      />
      {}
      <BankAccountsOverview
        accountCount={banks ? banks.length : 0}
        totalBalance={banks ? banks[0].balance : 0}
      />
      <RecentTransactions banks={banks} />
      <BankTransactions
        bankName={banks ? banks[0].account_name : ""}
        accountType={banks ? banks[0].account_type : ""}
        balance={banks ? banks[0].balance : 0}
        transactions={transactions}
      />
    </main>
  );
};

export default MyComponent;
