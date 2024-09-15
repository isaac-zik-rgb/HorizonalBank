import React from "react";
import RecipientEmail from "./RecipientEmail";
import RecipientAccountNumber from "./RecipientAcountNumber";
import TransferAmount from "./TransferAmount";

interface BankAccountDetailsProps {
  setEmail: (email: string) => void;
  setAccountNumber: (accountNumber: string) => void;
  setAmount: (amount: number) => void;
  setCategory: (category: string) => void;
}

const BankAccountDetails: React.FC<BankAccountDetailsProps> = ({
  setEmail,
  setAccountNumber,
  setAmount,
  setCategory,
}) => {
  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="h4 mb-2">Bank account details</h2>
              <p className="text-muted">
                Enter the bank account details of the recipient
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18fcd78863cdf7d4cc872e3e5dec3f08bdbb4bed3aafe49f418c79d06d2ac8a3?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
              alt=""
              className="img-fluid"
              style={{ width: "20px" }}
            />
          </div>
          <hr className="mb-4" />
        </div>
      </div>
      <RecipientEmail setEmail={setEmail} />
      <RecipientAccountNumber setRecipientAccountNumber={setAccountNumber} />
      <TransferAmount setAmount={setAmount} setCategory={setCategory} />
    </section>
  );
};

export default BankAccountDetails;
