import React, { useState } from "react";
import TransactionRow from "./TransactionRow";
import Pagination from "./Pagination";

interface Transaction {
  id: number;
  recipient: string;
  amount: string;
  status: string;
  date: string;
  category: string;
  isPositive: boolean;
  sender: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  // Get current transactions for the page
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions =
    transactions &&
    transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  //set the spending
  localStorage.setItem("spending", "0");
  // Change page handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  transactions &&
    transactions.forEach((transaction) => {
      if (!transaction.isPositive) {
        const spending = Number(localStorage.getItem("spending"));
        const total = Number(transaction.amount) + spending;
        localStorage.setItem("spending", String(total));
      }
    });
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Transaction</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions &&
              currentTransactions.map((transaction) => (
                <TransactionRow key={transaction.id} {...transaction} />
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        transactionsPerPage={transactionsPerPage}
        totalTransactions={transactions && transactions.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default TransactionTable;
