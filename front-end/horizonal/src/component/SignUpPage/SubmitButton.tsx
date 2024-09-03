import React from "react";
import { Button } from "react-bootstrap";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      type="submit"
      variant="primary"
      className={`${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
