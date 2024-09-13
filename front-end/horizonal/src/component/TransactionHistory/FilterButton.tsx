import React from "react";

interface FilterButtonProps {}

const FilterButton: React.FC<FilterButtonProps> = () => {
  return (
    <button className="btn btn-outline-secondary" type="button">
      <i className="bi bi-funnel me-2"></i>
      Apply filter
    </button>
  );
};

export default FilterButton;
