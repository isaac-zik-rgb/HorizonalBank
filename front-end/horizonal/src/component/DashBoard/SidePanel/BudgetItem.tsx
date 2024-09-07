import React from "react";

export interface BudgetItemProps {
  title: string;
  amountLeft: string;
  color: string;
  progress: number;
  iconSrc: string;
}

const BudgetItem: React.FC<BudgetItemProps> = ({
  title,
  amountLeft,
  color,
  progress,
  iconSrc,
}) => {
  return (
    <div
      className={`d-flex align-items-start p-3 rounded-3 mb-3 bg-${color} bg-opacity-10`}
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="me-3"
        style={{ width: "40px", height: "40px" }}
      />
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className={`fw-medium text-${color}`}>{title}</div>
          <div className={`text-${color}`}>{amountLeft} left</div>
        </div>
        <div className="progress" style={{ height: "8px" }}>
          <div
            className={`progress-bar bg-${color}`}
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
