import React from "react";
import BudgetItem, { BudgetItemProps } from "./BudgetItem";

const budgetData: BudgetItemProps[] = [
  {
    title: "Subscriptions",
    amountLeft: "$25",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d8a240cda2bfa3c367ab6d41b9561307b2402bc767e3eebf493aabe0fc51724b?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
    progressPercentage: 73,
    colorClass: "bg-primary",
  },
  {
    title: "Food and booze",
    amountLeft: "$120",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c67b729673cf3c0e21d3544a6af1b808ea3547335f2367aee9a1d767ea6c9452?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
    progressPercentage: 95,
    colorClass: "bg-danger",
  },
  {
    title: "Savings",
    amountLeft: "$50",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ac25a731c0961a95b83eb04981f8ffb7b134a62158f1d9cc30adf6185e8fd3f2?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
    progressPercentage: 0,
    colorClass: "bg-success",
  },
];

const BudgetSection: React.FC = () => {
  return (
    <section className="mt-4">
      <hr className="mb-4" />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">My budgets</h2>
        <button className="btn btn-link p-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3da735b11f5582306b9a3f2e97af1ba2894fab779af9ce176cdcb198c9812b3?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt="Add budget"
            style={{ width: "20px", height: "20px" }}
          />
          <span className="visually-hidden">Add budget</span>
        </button>
      </div>
      {budgetData.map((budget, index) => (
        <BudgetItem key={index} {...budget} />
      ))}
    </section>
  );
};

export default BudgetSection;
