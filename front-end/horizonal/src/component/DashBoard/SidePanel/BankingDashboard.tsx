import React from "react";
import BankSection from "./BankSection";
import BudgetSection from "./BudgetSection";

const BankingDashboard: React.FC = () => {
  return (
    <main
      className="container-fluid p-0 bg-white border-start border-gray-200 mx-auto"
      style={{ maxWidth: "480px" }}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4891f6ca5f5009cefea0034f8c7b385d958caa7cfe79422b12b9019ba1df56e2?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
        alt="Banking dashboard header"
        className="img-fluid w-100"
        style={{ aspectRatio: "1.46" }}
      />
      <BankSection />
      <BudgetSection />
    </main>
  );
};

export default BankingDashboard;
