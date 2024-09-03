import React from "react";

const SignUpLink: React.FC = () => {
  return (
    <div className="flex gap-1 justify-center items-start mt-8 w-full text-sm leading-none">
      <p className="text-slate-600">Don't have an account?</p>
      <a
        href="#"
        className="flex overflow-hidden gap-2 justify-center items-center font-semibold"
      >
        <span className="self-stretch my-auto bg-clip-text bg-[linear-gradient(90deg,#0179FE_0%,#4893FF_100%)]">
          Sign up
        </span>
      </a>
    </div>
  );
};

export default SignUpLink;
