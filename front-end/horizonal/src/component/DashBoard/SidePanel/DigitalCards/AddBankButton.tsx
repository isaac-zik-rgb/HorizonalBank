import React from "react";

const AddBankButton: React.FC = () => {
  return (
    <button className="flex gap-3 items-center my-auto text-sm leading-none text-slate-600">
      <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c399da9ef4960be3e3af74629aab6662f935cfca052d2d0977afa04241aef0c8?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <span className="self-stretch my-auto">Add bank</span>
      </div>
    </button>
  );
};

export default AddBankButton;
