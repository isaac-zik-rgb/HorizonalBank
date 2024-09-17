import React from "react";
import { formateDate } from "../DashBoard/AppUtils";

interface BankCardProps {
  accountName: string;
  holderName: string;
  cardNumber: string;
  expirationDate: string;
  cardType: string;
}

const BankCard: React.FC<BankCardProps> = ({
  accountName,
  holderName,
  cardNumber,
  expirationDate,
  cardType,
}) => {
  const logoSrc =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/038ee99e98ef3b4c9087e498d94d2753f99f91e6e9c7d1ce0370304dfbb30259?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22";

  const expiryDate = formateDate(expirationDate);

  return (
    <div className={`card text-white ${"bg-primary"} mb-3`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title">{accountName}</h5>
          <div className="bg-white bg-opacity-25 rounded-circle p-2">
            <img
              src={logoSrc}
              alt=""
              className="img-fluid"
              style={{ width: "12px" }}
            />
          </div>
        </div>
        <div className="position-relative" style={{ minHeight: "100px" }}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b7da7e3526ffbfb827e50825251bd1fbd567b496f6218ce9e0ec46a7823a42b?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt=""
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          />
          <div className="position-relative">
            <div className="d-flex justify-content-between">
              <small>{holderName}</small>
              <small>{expiryDate}</small>
            </div>
            <p className="mt-2 fs-6 letter-spacing-2">{cardNumber}</p>
            <p className="mt-2 fs-6 letter-spacing-2">{cardType}</p>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9040684c60a4eec68329014e02fb46dcc2a49d1807ac55db506892890787454?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          alt="Card network logo"
          className="mt-3"
          style={{ width: "43px" }}
        />
      </div>
    </div>
  );
};

export default BankCard;
