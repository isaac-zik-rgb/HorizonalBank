import React from "react";
import SignUpForm from "./SignUpForm";

const SignUpPage: React.FC = () => {
  const handleFormSubmit = async (formData: FormData) => {
    // Convert FormData to an object
    const data = Object.fromEntries(formData.entries());
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
        console.log("Signup successful:", result);
        // Handle success (e.g., redirect to login page or dashboard)
      } else {
        console.log(response);
        console.error("Signup failed:", response.statusText);
        // Handle failure (e.g., show an error message to the user)
      }
    } catch (error) {
      console.log(error);
      console.error("Error submitting form:", error);
      // Handle network or other errors
    }
  };

  return (
    <div>
      <SignUpForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default SignUpPage;
