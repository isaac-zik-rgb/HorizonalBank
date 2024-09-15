import React from "react";

const AddBankButton: React.FC = () => {
  return (
    <button className="btn btn-link text-decoration-none text-start w-100 py-3">
      <div className="d-flex align-items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0445bc5fd0b9343bd14061ad9120e562e83678e0005ab2a67a6776b2ba50e7a?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          alt=""
          className="me-2"
          style={{ width: "20px", height: "20px" }}
        />
        <span className="flex-grow-1">Add new bank</span>
        <small className="text-muted">⌘+</small>
      </div>
    </button>
  );
};

export default AddBankButton;
