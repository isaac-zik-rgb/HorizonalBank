import React from "react";

interface AccountSelectorProps {}

const AccountSelector: React.FC<AccountSelectorProps> = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        id="accountDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/136757232291f1d4ce56826050594871dc6fc3edf21f79680687c2df881bc1c6?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          alt=""
          className="me-2"
          width="24"
          height="24"
        />
        Select Account
      </button>
      <ul className="dropdown-menu" aria-labelledby="accountDropdown">
        <li>
          <a className="dropdown-item" href="#">
            Account 1
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Account 2
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Account 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountSelector;
