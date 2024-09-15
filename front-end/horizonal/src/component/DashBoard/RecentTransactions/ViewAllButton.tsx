import React from "react";

const ViewAllButton: React.FC = () => {
  return (
    <button
      className="btn btn-outline-secondary btn-sm"
      onClick={() => (window.location.href = "/dashboard/transactionHistory")}
    >
      View all
    </button>
  );
};

export default ViewAllButton;
