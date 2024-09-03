import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="d-flex align-items-center mb-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb46bbe18687be8ffe872235e7f6125469c9ca31a3ae29a83a2b7cfa0dce9dd?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
        alt="Horizon logo"
        className="me-2"
        style={{ width: "33px", height: "33px" }}
      />
      <h1 className="h3 mb-0 text-primary">Horizon</h1>
    </div>
  );
};

export default Logo;
