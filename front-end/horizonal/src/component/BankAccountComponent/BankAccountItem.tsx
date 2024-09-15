import React from "react";

interface BankAccount {
  account_name: string;
  balance: number;
  bgColor: "bg-success";
}

interface BankAccountItemProps {
  account: BankAccount;
}

const BankAccountItem: React.FC<BankAccountItemProps> = ({ account }) => {
  return (
    <div className="card-body border-bottom">
      <div className="d-flex align-items-center">
        <div
          className={`rounded-circle ${account.bgColor} text-white d-flex align-items-center justify-content-center me-3`}
          style={{ width: "40px", height: "40px" }}
        ></div>
        <div>
          <h3 className="h6 mb-0">{account.account_name}</h3>
          <p className="text-primary mb-0">${account.balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BankAccountItem;
