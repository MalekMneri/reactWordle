import React from "react";

export default function Guess(props) {
  let guess = props.guess;
  return (
    <>
      <div className="row">
        {guess.split("").map((letter, index) => (
          <div className="tile">{letter}</div>
        ))}
      </div>
    </>
  );
}
