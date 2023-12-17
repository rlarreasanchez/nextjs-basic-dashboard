"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  resetCount,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartCounterProps {
  value?: number;
}

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());

  return data;
};

export const CartCounter = ({ value: counterValue = 8 }: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const isReady = useAppSelector((state) => state.counter.isReady);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(counterValue));
  // }, [dispatch, counterValue]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  if (!isReady) {
    return <span className="text-3xl">Cargando Contador...</span>;
  }

  return (
    <>
      <span className="text-9xl"> {isReady && count} </span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
