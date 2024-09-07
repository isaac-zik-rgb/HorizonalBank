import React from "react";

interface WelcomeSectionProps {
  name: string;
  description: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  name,
  description,
}) => {
  return (
    <header className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-primary">Welcome, {name}</h1>
          <p className="mt-2 text-secondary">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default WelcomeSection;
