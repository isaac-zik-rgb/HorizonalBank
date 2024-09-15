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
  category: {
    name: string;
    color: string;
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00047ad5237897fbe7f4f0a060e6428c6dd2c73240b5e5b52c386dd7f342e11f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22";
  };
}

// const transactions = [
//   {
//     name: "Spotify",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/3e0cf7d73572d0f2935d85f37fa4f384acede48b7c7270d6c2e77198eb5a01df?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     amount: "- $15.00",
//     isPositive: false,
//     status: "Processing" as const,
//     date: "Wed 1:00pm",
//     category: {
//       name: "Subscriptions",
//       color: "bg-primary",
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00047ad5237897fbe7f4f0a060e6428c6dd2c73240b5e5b52c386dd7f342e11f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     },
//   },
//   {
//     name: "Alexa Doe",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/707ada2016fe407e92a90819444d529d0376d9ce6f0ea2a3f9efe161d7d54a3f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     amount: "+ $88.00",
//     isPositive: true,
//     status: "Success" as const,
//     date: "Wed 2:45am",
//     category: {
//       name: "Deposit",
//       color: "bg-success",
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e423da5499bdfee13a85a439659934095e76298d5ca180ac6bb1e24ca033d0bf?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     },
//   },
//   {
//     name: "Figma",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/219f78fa7d5ab2128ea58a827118820ad7ad80440818d67bf82f558b02fe260e?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     amount: "- $18.99",
//     isPositive: false,
//     status: "Processing" as const,
//     date: "Tue 6:10pm",
//     category: {
//       name: "Income",
//       color: "bg-success",
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e423da5499bdfee13a85a439659934095e76298d5ca180ac6bb1e24ca033d0bf?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     },
//   },
//   {
//     name: "Fresh F&V",
//     image: "FV",
//     amount: "- $88.00",
//     isPositive: false,
//     status: "Success" as const,
//     date: "Tue 12:15pm",
//     category: {
//       name: "Groceries",
//       color: "bg-info",
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d727ba7a7a4e8f9fc75c4ec2608674932dd05cdb58305df1c56097b40b9804e?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     },
//   },
//   {
//     name: "Sam Sulek",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/ada7f429bf14fdbfd70bfe3de8f39eb6a4f7caacb1aaa3ffd9e94b966bae0c49?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     amount: "- $40.20",
//     isPositive: false,
//     status: "Declined" as const,
//     date: "Tue 5:40am",
//     category: {
//       name: "Food",
//       color: "bg-danger",
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddc3b3d6e0a03c21e556c13ebbd9f323e51a41b2c22fe556de9379c9687c68d5?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
//     },
//   },
// ];

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
