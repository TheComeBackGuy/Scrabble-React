import React from "react";

export default function MakeSingleRow({ rowNumber }) {
  const lengthOfBoard = 15;

  //define special spaces
  //board#, text, color/class

  const tripleWord = [
    [0, 0],
    [0, Math.ceil(lengthOfBoard / 2)],
    [0, lengthOfBoard],
    [Math.ceil(lengthOfBoard / 2), 0],
    [Math.ceil(lengthOfBoard / 2), Math.ceil(lengthOfBoard / 2)],
    [lengthOfBoard, Math.ceil(lengthOfBoard / 2)],
    [lengthOfBoard, 0],
    [Math.ceil(lengthOfBoard / 2), 0],
    [lengthOfBoard, 0],
  ];

  let boardGrid = new Array(lengthOfBoard);

  //match item in array
  ///if the current item's numbers math an entry array in tripleWord, pusha  style
  tripleWord.filter((set) => {
    // console.log(set[0]);
    if (set[0] === 12) {
      console.log(set);
    }
  });

  for (let i = 0; i < lengthOfBoard; i++) {
    // console.log([rowNumber, i]);
    const findSet = tripleWord.find((set) => set === [rowNumber, i]);
    if (findSet) {
      boardGrid.push(
        <div className="space tripleWord">{`r${rowNumber}c${i}`}t</div>
      );
    } else if (!findSet) {
      boardGrid.push(<div className="space">{`r${rowNumber}c${i}`}</div>);
    }

    // if ([rowNumber, i] === anything in tripleWord) {
    //   boardGrid.push(<div className="space tripleWord">TRIPLE WORD SCORE</div>);
    // } else {
  }

  // console.log(boardGrid);
  return (
    <div className="row">
      {boardGrid.map((row) => {
        return row;
      })}{" "}
    </div>
  );
}
