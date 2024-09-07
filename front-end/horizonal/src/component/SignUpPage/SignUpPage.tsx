import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState<string | undefined>(
    undefined
  );
  const [AlertType, setAlertType] = useState<"success" | "danger">("success");
  const [loading, setLoading] = useState(false);
  const naviage = useNavigate();
  const handleFormSubmit = async (formData: FormData) => {
    setLoading(true);

    // Convert FormData to an object
    const data = Object.fromEntries(formData.entries());
    setAlertMessage(undefined);
    console.log(data);
    try {
      const response = await fetch(
        "https://horizonalbank.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send data as JSON
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAlertType("success");
        setAlertMessage("Registration successful!");
        console.log("Signup successful:", result);
        setLoading(false);
        // Handle success (e.g., redirect to login page or dashboard)
      } else {
        const result = await response.json();
        setAlertType("danger");
        setAlertMessage(result.message);
        console.error("Signup failed:", result.message);
        setLoading(false);
        naviage("/login");
        // Handle failure (e.g., show an error message to the user)
      }
    } catch (error) {
      console.log(error);
      console.error("Error submitting form:", error);
      setAlertType("danger");
      setAlertMessage("NetWork Failure");
      // Handle network or other errors
      setLoading(false);
    }
  };

  return (
    <div>
      <SignUpForm
        onSubmit={handleFormSubmit}
        alertMessage={alertMessage}
        alertType={AlertType}
        loading={loading}
      />
    </div>
  );
};

export default SignUpPage;
