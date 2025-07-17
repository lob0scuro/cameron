"use client";

import React from "react";
import { useParams } from "next/navigation";
import Incoming from "@/components/Incoming";

const Project = () => {
  const { name } = useParams();
  return (
    <div>
      <p>{name !== "BUj" && name}</p>
      <div>{name === "BUj" && <Incoming />}</div>
    </div>
  );
};

export default Project;
