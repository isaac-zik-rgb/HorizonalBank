import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ac2dd87daef84cbbbd6be6b25784e06cd61347d8d6fc4360fe1df3b5f6b1d15?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
        alt="Horizon logo"
        className="me-2"
        style={{ width: "33px", height: "33px" }}
      />
      <span className="h3 mb-0 text-primary">Horizon</span>
    </div>
  );
};

export default Logo;
