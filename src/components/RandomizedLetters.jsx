import Letters from "../data/letterList.json";
import React from "react";
import SingleTileLetter from "./SingleTileLetter";

export default function RandomizedLetters() {
  let elementReturned = [];

  for (let i = 0; i < 20; i++) {
    let randoNumber = Math.floor(Math.random() * Letters.length);
    console.log(randoNumber);
    elementReturned.push(
      <SingleTileLetter
        key={Letters[randoNumber].title}
        id={Letters[randoNumber].title}
        letter={Letters[randoNumber].title}
      />
    );
    // return elementReturned;
  }
  console.log(elementReturned);
  return (
    <div>
      {elementReturned.map((el, index) => {
        return <div key={index}>{el}</div>;
      })}
    </div>
  );
}
