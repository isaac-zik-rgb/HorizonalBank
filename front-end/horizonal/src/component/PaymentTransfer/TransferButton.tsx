import React from "react";

interface TransferButtonProps {
  handleTransfer: () => void;
  loading: boolean;
}

const TransferButton: React.FC<TransferButtonProps> = ({
  handleTransfer,
  loading,
}) => {
  return (
    <div className="row">
      <div className="col-12">
        <hr className="mb-4" />
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={handleTransfer}
          style={{
            background: "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
            border: "none",
          }}
        >
          {loading ? "Transfering Please wait!!!...." : "Transfer Funds"}
        </button>
      </div>
    </div>
  );
};

export default TransferButton;
