import React, { Component } from "react";
import Guesses from "../../Components/wordle/Guesses/Guesses";
import Keyboard from "../../Components/wordle/Keyboard/Keyboard";

export default class Wordle extends Component {
  render() {
    return (
      <>
        <Guesses />
        <Keyboard />
      </>
    );
  }
}
