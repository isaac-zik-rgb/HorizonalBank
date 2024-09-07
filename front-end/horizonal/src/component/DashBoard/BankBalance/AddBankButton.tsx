import React from "react";

export const AddBankButton: React.FC = () => {
  return (
    <button className="d-flex gap-2 align-items-center btn btn-link text-decoration-none p-0">
      <div className="d-flex gap-2 justify-content-center align-items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ab4a86209c66e06ceec2fe288dc8689eb3735755b6e163532517950f1d62d7?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          className="img-fluid"
          alt=""
          style={{ width: "20px" }}
        />
        <span className="text-primary">Add bank</span>
      </div>
    </button>
  );
};
