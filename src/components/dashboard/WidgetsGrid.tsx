"use client";

import { useAppSelector } from "@/store";
import { SimpleWidget } from "..";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  const isReady = useAppSelector((state) => state.counter.isReady);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={`${count}`}
        subTitle="Productos en carrito de compras"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href={"/dashboard/counter"}
        label="Contador"
      />
    </div>
  );
};
