import { padEnd } from "lodash";
import React from "react";

export default function Guess(props) {
  const guess =  padEnd(props.guess, 5);

  return (
    <>
      <div className="tileRow">
        {guess.split('').map((letter, index) => (
          <div className="tile" key={index}>
            {letter}
          </div>
        ))}
      </div>
    </>
  );
}
