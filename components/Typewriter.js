"use client";

import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="font-Roboto whitespace-pre-wrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-50 p-4">
      {displayedText}
    </div>
  );
}

export default Typewriter;
