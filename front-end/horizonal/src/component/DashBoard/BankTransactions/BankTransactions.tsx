import React from "react";
import BankHeader from "./BankHeader";
import TransactionTable from "./TransactionTable";

interface Props {
  bankName: string;
  balance: number;
  accountType: string;
  transactions: TransactionsProps[];
}

interface TransactionsProps {
  recipient: string;
  image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e0cf7d73572d0f2935d85f37fa4f384acede48b7c7270d6c2e77198eb5a01df?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22";
  amount: string;
  isPositive: boolean;
  status: "Processing" | "Success" | "Declined";
  date: string;
  category: string;
  color?: string;
  icon?: string;
}

const BankTransactions: React.FC<Props> = ({
  bankName,
  balance,
  accountType,
  transactions,
}) => {
  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <BankHeader
            bankName={bankName}
            accountType={accountType}
            balance={balance}
          />
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </main>
  );
};

export default BankTransactions;
