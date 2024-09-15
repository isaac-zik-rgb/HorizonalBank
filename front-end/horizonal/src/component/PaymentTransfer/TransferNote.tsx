import React, { useState } from "react";

interface TransferNoteProps {
  setRemarks: (remarks: string) => void;
}

const TransferNote: React.FC<TransferNoteProps> = ({ setRemarks }) => {
  const [remarks, setRemarksState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRemarksState(e.target.value);
    setRemarks(e.target.value);
  };
  return (
    <div className="row">
      <div className="col-lg-4 mb-3 mb-lg-0">
        <label htmlFor="remarks" className="form-label fw-bold">
          Transfer Note (Optional)
        </label>
        <p className="text-muted small">
          Please provide any additional information or instructions related to
          the transfer
        </p>
      </div>
      <div className="col-lg-8">
        <textarea
          id="remarks"
          className="form-control"
          rows={4}
          value={remarks}
          placeholder={`Dear John,\nI hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it.`}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default TransferNote;
