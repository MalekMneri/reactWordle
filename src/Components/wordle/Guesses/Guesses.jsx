import React from "react";
import Guess from "../Guesses/Guess";

export default function Guesses() {
  let guesses = ["     ", "     ", "     ", "     ", "     ", "     "];
  return (
    <>
      <div className="board">
        {guesses.map((guess, index) => (
          <Guess key={index} guess={guess} />
        ))}
      </div>
    </>
  );
}
