import React, { useState } from "react";

interface RecipientAccountNumberProps {
  setRecipientAccountNumber: (accountNumber: string) => void;
}

const RecipientAccountNumber: React.FC<RecipientAccountNumberProps> = ({
  setRecipientAccountNumber,
}) => {
  const [recipientAcountNumber, setRecipientAccountNumberState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipientAccountNumberState(e.target.value);
    setRecipientAccountNumber(e.target.value);
  };
  return (
    <>
      <hr className="my-4" />
      <div className="row mb-4">
        <div className="col-lg-4 mb-3 mb-lg-0">
          <label htmlFor="recipientAcctNum" className="form-label fw-bold">
            Recipient's Bank Account Number
          </label>
        </div>
        <div className="col-lg-8">
          <input
            type="text"
            id="recipientAcctNum"
            className="form-control"
            placeholder="Enter the account number"
            value={recipientAcountNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default RecipientAccountNumber;
