import React, { useState } from "react";

interface RecipientEmailProps {
  setEmail: (email: string) => void;
}

const RecipientEmail: React.FC<RecipientEmailProps> = ({ setEmail }) => {
  const [email, setEmailState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <div className="row mb-4">
      <div className="col-lg-4 mb-3 mb-lg-0">
        <label htmlFor="recipientEmail" className="form-label fw-bold">
          Recipient's Email Address
        </label>
      </div>
      <div className="col-lg-8">
        <input
          type="recipientEmail"
          id="recipientEmail"
          className="form-control"
          placeholder="john@gmail.com"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default RecipientEmail;
