import React, { useState } from "react";

interface TransactionTabsProps {
  banks: string[];
}

const TransactionTabs: React.FC<TransactionTabsProps> = ({ banks }) => {
  const [activeBank, setActiveBank] = useState(banks[0]);

  return (
    <nav className="mt-4">
      <ul className="nav nav-tabs">
        {banks.map((bank) => (
          <li key={bank} className="nav-item">
            <button
              className={`nav-link ${bank === activeBank ? "active" : ""}`}
              onClick={() => setActiveBank(bank)}
              aria-current={bank === activeBank ? "page" : undefined}
            >
              {bank}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TransactionTabs;
