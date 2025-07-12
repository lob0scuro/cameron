"use client";

import React from "react";
import useTypewriter from "../hooks/useTypewriter";

const Typewriter = ({ text, speed, delay }) => {
  const displayText = useTypewriter(text, speed, delay);

  return <p>{displayText}</p>;
};

export default Typewriter;
