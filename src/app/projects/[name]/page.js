"use client";

import React from "react";
import { useParams } from "next/navigation";
import Incoming from "@/components/Incoming";

const Project = () => {
  const { name } = useParams();
  return (
    <div>
      <p>{name}</p>
      {name === "BUj" && <Incoming />}
    </div>
  );
};

export default Project;
