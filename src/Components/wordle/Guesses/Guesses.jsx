import React from "react";
import Guess from "../Guesses/Guess";

export default function Guesses() {
  let guesses = ["     ", "     ", "     ", "     ", "     ", "     "];
  document.addEventListener("keydown", (event) => {
    if (event.key >= "a" && event.key <= "z") {
      console.log(event.key);
    }
  });
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
