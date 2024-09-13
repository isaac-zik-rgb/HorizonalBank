import React from "react";

interface SpendingBarProps {
  spending: number;
}

const SpendingBar: React.FC<SpendingBarProps> = ({ spending }) => {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="text-muted">Spending this month</span>
        <span className="text-muted">
          ${spending ? spending.toFixed(2) : null}
        </span>
      </div>
      <div className="progress" style={{ height: "8px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "60%" }}
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default SpendingBar;
