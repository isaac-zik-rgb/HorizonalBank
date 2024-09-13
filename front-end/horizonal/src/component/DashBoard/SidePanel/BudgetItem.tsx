import React from "react";

export interface BudgetItemProps {
  title: string;
  amountLeft: string;
  iconSrc: string;
  progressPercentage: number;
  colorClass: string;
}

const BudgetItem: React.FC<BudgetItemProps> = ({
  title,
  amountLeft,
  iconSrc,
  progressPercentage,
  colorClass,
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        <img
          src={iconSrc}
          alt=""
          className="me-3"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between mb-2">
            <h3 className="h6 mb-0">{title}</h3>
            <span className="text-muted">{amountLeft} left</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className={`progress-bar ${colorClass}`}
              role="progressbar"
              style={{ width: `${progressPercentage}%` }}
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
