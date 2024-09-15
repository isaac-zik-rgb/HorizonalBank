import React, { useState } from "react";

interface TransferAmountProps {
  setAmount: (amount: number) => void;
  setCategory: (category: string) => void; // Added setCategory prop
}

const TransferAmount: React.FC<TransferAmountProps> = ({
  setAmount,
  setCategory,
}) => {
  const [amount, setAmountState] = useState(0);
  const [category, setCategoryState] = useState(""); // Added category state

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmountState(value);
    setAmount(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryState(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <>
      <hr className="my-4" />

      {/* Dropdown for Category */}
      <div className="row mb-4">
        <div className="col-lg-4 mb-3 mb-lg-0">
          <label htmlFor="category" className="form-label fw-bold">
            Category
          </label>
        </div>
        <div className="col-lg-8">
          <select
            id="category"
            className="form-select"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="food">Food</option>
            <option value="subscription">Subscription</option>
            <option value="deposit">Deposit</option>
            <option value="saving">Saving</option>
          </select>
        </div>
      </div>

      {/* Input for Amount */}
      <div className="row mb-4">
        <div className="col-lg-4 mb-3 mb-lg-0">
          <label htmlFor="transferAmount" className="form-label fw-bold">
            Amount
          </label>
        </div>
        <div className="col-lg-8">
          <input
            type="number"
            id="transferAmount"
            className="form-control"
            placeholder="4000"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
      </div>
    </>
  );
};

export default TransferAmount;
