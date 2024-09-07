import React from "react";

interface BankAccountSummaryProps {
  accountCount: number;
}

export const BankAccountSummary: React.FC<BankAccountSummaryProps> = ({
  accountCount,
}) => {
  return (
    <div className="d-flex gap-3 align-items-start" style={{ width: "120px" }}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c9e3a28c778e1bfeb17d74903cf43017b9484711060f6cb759580f45d49855?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
        className="img-fluid"
        alt={`Summary of ${accountCount} bank accounts`}
        style={{ width: "120px", height: "120px", objectFit: "contain" }}
      />
    </div>
  );
};
