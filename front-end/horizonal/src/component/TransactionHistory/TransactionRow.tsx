import React from "react";

interface TransactionRowProps {
  name: string;
  amount: string;
  status: string;
  date: string;
  category: string;
}

const TransactionRow: React.FC<TransactionRowProps> = ({
  name,
  amount,
  status,
  date,
  category,
}) => {
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return "bg-success";
      case "processing":
        return "bg-warning";
      case "declined":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category.toLowerCase()) {
      case "subscriptions":
        return "text-primary border-primary";
      case "deposit":
      case "income":
        return "text-success border-success";
      case "groceries":
        return "text-info border-info";
      case "food and dining":
        return "text-danger border-danger";
      default:
        return "text-secondary border-secondary";
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td className={amount.startsWith("+") ? "text-success" : "text-danger"}>
        {amount}
      </td>
      <td>
        <span className={`badge ${getStatusClass(status)}`}>{status}</span>
      </td>
      <td>{date}</td>
      <td>
        <span className={`badge border ${getCategoryClass(category)}`}>
          {category}
        </span>
      </td>
    </tr>
  );
};

export default TransactionRow;
