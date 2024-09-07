import React from "react";

const BankSection: React.FC = () => {
  return (
    <section className="mt-4 fw-semibold">
      <div className="px-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fs-4 text-gray-900">My Banks</h2>
          <button className="btn btn-link text-secondary p-0 d-flex align-items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c399da9ef4960be3e3af74629aab6662f935cfca052d2d0977afa04241aef0c8?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
              alt=""
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            <span>Add bank</span>
          </button>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/155a419f5fbba1d3740a7f01c03d6b717d9d24c4dbf12fd64eb00b89562f43cd?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          alt="Bank account summary"
          className="img-fluid mt-3"
          style={{ aspectRatio: "1.55" }}
        />
      </div>
    </section>
  );
};

export default BankSection;
