import React from "react";

export default function Guess(props) {
  let guess = props.guess;
  return (
    <>
      <div className="tileRow">
        {guess.split("").map((letter, index) => (
          <div className="tile" key={index}>
            {letter}
          </div>
        ))}
      </div>
    </>
  );
}
