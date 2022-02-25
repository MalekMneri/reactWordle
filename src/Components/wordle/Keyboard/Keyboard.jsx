import React from "react";

export default function Keyboard() {
  let firstRow = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"];
  let secondRow = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"];
  let thirdRow = ["W", "X", "C", "V", "B", "N"];

  return (
    <>
      <div className="keyboard">
        <div className="keyboardRow">
          {firstRow.map((letter, index) => (
            <div className="key" key={index}>
              {letter}
            </div>
          ))}
        </div>
        <div className="keyboardRow">
          {secondRow.map((letter, index) => (
            <div className="key" key={index}>
              {letter}
            </div>
          ))}
        </div>
        <div className="lastKeyboardRow">
          {thirdRow.map((letter, index) => (
            <div className="key" key={index}>
              {letter}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
