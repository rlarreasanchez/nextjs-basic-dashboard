"use client";

import { useState } from "react";

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value: counterValue = 8 }: CartCounterProps) => {
  const [counter, setCounter] = useState(counterValue);

  const increment = () => {
    setCounter((value) => value + 1);
  };

  const decrement = () => {
    if (counter == 0) return;
    setCounter((value) => value - 1);
  };

  return (
    <>
      <span className="text-9xl"> {counter} </span>

      <div className="flex">
        <button
          onClick={increment}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={decrement}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
