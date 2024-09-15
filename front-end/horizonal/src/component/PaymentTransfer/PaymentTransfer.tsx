import React from "react";
import TransferDetails from "./TransferDetails";
import BankAccountDetails from "./BankAccountDetails";
import TransferButton from "./TransferButton";

interface PaymentTransferProps {
  setEmail: (email: string) => void;
  setAccountNumber: (accountNumber: string) => void;
  setAmount: (amount: number) => void;
  setRemarks: (remarks: string) => void;
  handleTransfer: () => void;
  setCategory: (category: string) => void;
}

const PaymentTransfer: React.FC<PaymentTransferProps> = ({
  setEmail,
  setAccountNumber,
  setRemarks,
  setAmount,
  handleTransfer,
  setCategory,
}) => {
  return (
    <main className="container-fluid py-5 bg-light">
      <div className="row">
        <div className="col-12">
          <section className="mb-5">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="display-4 mb-3">Payment Transfer</h1>
                <p className="lead text-muted">
                  Please provide any specific details or notes related to the
                  payment transfer
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <TransferDetails setRemarks={setRemarks} />
      <BankAccountDetails
        setEmail={setEmail}
        setAccountNumber={setAccountNumber}
        setAmount={setAmount}
        setCategory={setCategory}
      />
      <TransferButton handleTransfer={handleTransfer} />
    </main>
  );
};

export default PaymentTransfer;
