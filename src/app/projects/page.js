"use client";

import Button from "@/components/Button";
import React from "react";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  const handleRouting = (projectName) => {
    router.push(`/projects/${projectName}`);
  };
  return (
    <>
      {/* <h1>Projects</h1> */}
      <div className="btn-block-stack">
        <Button title={"bluTape"} onClick={() => handleRouting("bluTape")} />
        <Button title={"Legacy"} onClick={() => handleRouting("Legacy")} />
        <Button title={"epcTeams"} onClick={() => handleRouting("epcTeams")} />
        <Button title={"Stripe"} onClick={() => handleRouting("Stripe")} />
      </div>
    </>
  );
};

export default Projects;
