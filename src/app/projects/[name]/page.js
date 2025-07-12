"use client";

import React from "react";
import { useParams } from "next/navigation";

const Project = () => {
  const { name } = useParams();
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Project;
