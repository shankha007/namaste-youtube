import React from "react";

import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex justify-around">
      <div className="w-[95%] flex overflow-hidden">
        <Button name="All" />
        <Button name="Live" />
        <Button name="Music" />
        <Button name="Computer programming" />
        <Button name="Mixes" />
        <Button name="Portfolios" />
        <Button name="Twenty20 Cricket" />
        <Button name="Stocks" />
        <Button name="Gaming" />
        <Button name="Wealth" />
        <Button name="News" />
        <Button name="Startup company" />
        <Button name="Funded company" />
      </div>
      <button className="h-8 w-8 rounded-full font-bold self-center bg-gray-300">
        &gt;
      </button>
    </div>
  );
};

export default ButtonList;
