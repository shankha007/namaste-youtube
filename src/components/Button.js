import React from "react";

const Button = ({ name, addedClass }) => {
  return (
    <div>
      <button
        className={`px-3 py-1 m-2 font-semibold whitespace-nowrap overflow-hidden ${
          addedClass ? addedClass : "bg-gray-200"
        } rounded-lg`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
