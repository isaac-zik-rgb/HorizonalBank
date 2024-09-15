import React from "react";

interface CardImageProps {
  cardNumber: string;
  cardHolderName: string;
  cvv: string;
  expiration: string;
  accountNumber: string;
}

const CardImage: React.FC<CardImageProps> = ({
  cardNumber,
  cardHolderName,
  cvv,
  expiration,
  accountNumber,
}) => {
  return (
    <div className="card mt-3">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/be342472a563452a3e8432a74622f6f8eebcacaca4dace01d98a9125b21c930b?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
        alt={`Digital card for ${cardHolderName}`}
        className="card-img-top"
      />

      <div className="card-body">
        <label className="card-text">Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={cardNumber}
          readOnly
          className="form-control mb-2"
        />

        <label className="card-text">Account Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={accountNumber}
          readOnly
          className="form-control mb-2"
        />

        <label className="card-text">Card Holder:</label>
        <input
          type="text"
          name="cardHolderName"
          value={cardHolderName}
          readOnly
          className="form-control mb-2"
        />

        <label className="card-text">CVV:</label>
        <input
          type="text"
          name="cvv"
          value={cvv}
          readOnly
          className="form-control mb-2"
        />

        <label className="card-text">Expiration:</label>
        <input
          type="text"
          name="expiration"
          value={expiration}
          readOnly
          className="form-control mb-2"
        />
      </div>
    </div>
  );
};

export default CardImage;
