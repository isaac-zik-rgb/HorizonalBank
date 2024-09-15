import React from "react";

interface AccountSummaryProps {
  accountName: string;
  balance: number;
  accountNumber: string;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({
  accountName,
  balance,
  accountNumber,
}) => {
  return (
    <div className="card bg-primary text-white mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h2 className="h4 mb-2">{accountName}</h2>
            <p className="mb-2">{accountName} Growth Savings Account</p>
            <p className="mb-0">●●●● ●●●● ●●●● {accountNumber}</p>
          </div>
          <div className="col-md-4">
            <div className="bg-white bg-opacity-25 p-3 rounded">
              <p className="mb-1 text-white-50">Current Balance</p>
              <h3 className="mb-0">${balance}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
