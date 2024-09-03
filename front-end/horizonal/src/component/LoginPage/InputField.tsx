import React from "react";
import { Form } from "react-bootstrap";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <Form.Group className="mb-3" controlId={`${label.toLowerCase()}-input`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </Form.Group>
  );
};

export default InputField;
