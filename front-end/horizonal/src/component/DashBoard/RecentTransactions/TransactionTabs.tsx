import React, { useState } from "react";

interface TransactionTabsProps {
  banks: Props[];
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
const TransactionTabs: React.FC<TransactionTabsProps> = ({ banks }) => {
  const [activeBank, setActiveBank] = useState(banks ? banks[0] : null);

  return (
    <nav className="mt-4">
      <ul className="nav nav-tabs">
        {banks
          ? banks.map((bank) => (
              <li key={bank.id} className="nav-item">
                <button
                  className={`nav-link ${bank === activeBank ? "active" : ""}`}
                  onClick={() => setActiveBank(bank)}
                  aria-current={bank === activeBank ? "page" : undefined}
                >
                  {bank.account_name}
                </button>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default TransactionTabs;
