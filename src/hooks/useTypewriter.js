"use client";

import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 60, delay = 0) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timeoutId = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return displayText;
};

export default useTypewriter;
