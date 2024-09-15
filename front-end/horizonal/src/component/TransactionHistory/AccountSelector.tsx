import React, { useState, useEffect } from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import BankAccountList from "../BankAccountComponent/BankAccountList";
import { getAcct } from "../DashBoard/AppUtils";

const AccountSelector: React.FC = () => {
  //set the state to store the accounts
  const [bankAccounts, setBankAccounts] = useState<any[]>([]);

  //retreive the accounts

  useEffect(() => {
    getAcct()
      .then((data) => {
        setBankAccounts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const accountName = localStorage.getItem("accountName");
  const [selectedAcct, setSelectedAcct] = useState(accountName);

  const handleSelectAccount = (selectedAccount: string) => {
    setSelectedAcct(selectedAccount); // Update the selected account in the button
  };

  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle
        variant="outline-secondary"
        id="accountDropdown"
        className="d-flex align-items-center"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/136757232291f1d4ce56826050594871dc6fc3edf21f79680687c2df881bc1c6?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          alt="Account Icon"
          className="me-2"
          width="24"
          height="24"
        />
        {selectedAcct}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: "300px" }}>
        <BankAccountList
          handleSelectAccount={handleSelectAccount}
          bankAccounts={bankAccounts}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AccountSelector;
