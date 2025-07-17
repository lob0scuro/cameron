"use client";

import React, { useState } from "react";
import { today, formatter } from "@/lib/utils";

const Incoming = () => {
  const [total, setTotal] = useState("");
  const Tithes = Number(total) * 0.1;
  const tithes_adjusted = total - Tithes;
  const Needs = tithes_adjusted * 0.5;
  const Wants = tithes_adjusted * 0.3;
  const Savings = tithes_adjusted * 0.2;

  return (
    <div className="flex flex-col items-center border p-5 rounded-xl bg-[#003249]">
      <p className="mb-1 font-bold">{today}</p>
      <label className="text-2xl font-bold">Total Income</label>
      <input
        type="text"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        className="bg-white rounded-lg h-10 text-black px-2 w-40 text-center mb-5"
      />
      <div className="flex flex-col items-start gap-2 mt-5">
        <h3 className="font-bold">Tithing: {formatter.format(Tithes)}</h3>
        <h4>Remainder: {formatter.format(tithes_adjusted)}</h4>
        <table className="flex flex-col gap-1 w-full mt-2">
          <thead className="w-80 border-b">
            <tr className="w-80 flex justify-between">
              <th>Needs</th>
              <th>Wants</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-80 flex justify-between">
              <td>{formatter.format(Needs)}</td>
              <td>{formatter.format(Wants)}</td>
              <td>{formatter.format(Savings)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incoming;
