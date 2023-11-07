import React, { useState, useEffect } from "react";
import Guess from "./Guess";

const MAX_ATTEMPTS = 6;

export default function Guesses() {
  const [guesses, setGuesses] = useState([""]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const pressedKey = event.key;

    if (pressedKey >= "a" && pressedKey <= "z") {
      const lastElement = guesses[guesses.length - 1];
      if (lastElement.length < 5) {
        setGuesses([
          ...guesses.slice(0, -1),
          `${lastElement ?? ""}${pressedKey}`,
        ]);
      }
    } else if (pressedKey === "Enter" && guesses[guesses.length - 1].length === 5) {
      // TODO handle submit
      console.log("enter");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guesses]);

  return (
    <>
      <div className="board">
        {Array.from({ length: MAX_ATTEMPTS }, (_, key) => (
          <Guess key={key} guess={guesses[key] ?? ""} />
        ))}
      </div>
    </>
  );
}
