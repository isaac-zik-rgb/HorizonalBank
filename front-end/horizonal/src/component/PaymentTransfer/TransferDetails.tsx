import React from "react";
import SelectSourceBank from "./SelectSourceBank";
import TransferNote from "./TransferNote";

interface TransferDetailsProps {
  setRemarks: (reamrks: string) => void;
}

const TransferDetails: React.FC<TransferDetailsProps> = ({ setRemarks }) => {
  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="h4 mb-2">Transfer details</h2>
              <p className="text-muted">Enter the details of the recipient</p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1283b79df5818d51efffc91a7b769e0210262af65cf3a4857a2e273961fff6c8?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
              alt=""
              className="img-fluid"
              style={{ width: "20px" }}
            />
          </div>
          <hr className="mb-4" />
        </div>
      </div>
      <SelectSourceBank />
      <hr className="my-4" />
      <TransferNote setRemarks={setRemarks} />
    </section>
  );
};

export default TransferDetails;
