import "./scrabbleGrid.css";
import "../App.css";

import React from "react";

export default function ScrabbleGrid() {
  const gridSize = 15;
  let col = 0;
  let row = 1;
  const gridArray = new Array(gridSize * gridSize);
  gridArray.fill(gridArray.id);
  //   console.log(gridArray);

  const specialSpace = [
    //Triple Word info
    [1, 1, "tripleWord", "Triple Word Score"],
    [1, Math.ceil(gridSize / 2), "tripleWord", "Triple Word Score"],
    [1, gridSize, "tripleWord", "Triple Word Score"],
    [Math.ceil(gridSize / 2), 1, "tripleWord", "Triple Word Score"],

    [Math.ceil(gridSize / 2), gridSize, "tripleWord", "Triple Word Score"],
    [gridSize, 1, "tripleWord", "Triple Word Score"],

    [gridSize, Math.ceil(gridSize / 2), "tripleWord", "Triple Word Score"],
    [gridSize, gridSize, "tripleWord", "Triple Word Score"],
    //DoubleLetter info
    [1, 4, "doubleLetter", "Double Letter Scrore"],
    [1, 12, "doubleLetter", "Double Letter Scrore"],
    [3, Math.ceil(gridSize / 2) - 1, "doubleLetter", "Double Letter Scrore"],
    [3, Math.ceil(gridSize / 2) + 1, "doubleLetter", "Double Letter Scrore"],
    [4, 1, "doubleLetter", "Double Letter Scrore"],
    [4, Math.ceil(gridSize / 2), "doubleLetter", "Double Letter Scrore"],
    [4, gridSize, "doubleLetter", "Double Letter Scrore"],
    [7, 3, "doubleLetter", "Double Letter Scrore"],
    [7, 7, "doubleLetter", "Double Letter Scrore"],
    [7, 9, "doubleLetter", "Double Letter Scrore"],
    [8, 4, "doubleLetter", "Double Letter Scrore"],
    [8, 12, "doubleLetter", "Double Letter Scrore"],
    //bottom
    [9, 3, "doubleLetter", "Double Letter Scrore"],
    [9, 13, "doubleLetter", "Double Letter Scrore"],
    [3, Math.ceil(gridSize / 2) + 1, "doubleLetter", "Double Letter Scrore"],
    [4, 1, "doubleLetter", "Double Letter Scrore"],
    [4, Math.ceil(gridSize / 2), "doubleLetter", "Double Letter Scrore"],
    [4, gridSize, "doubleLetter", "Double Letter Scrore"],
    [7, 3, "doubleLetter", "Double Letter Scrore"],
    [7, 7, "doubleLetter", "Double Letter Scrore"],
    [7, 9, "doubleLetter", "Double Letter Scrore"],
    [7, 13, "doubleLetter", "Double Letter Scrore"],
    [9, 7, "doubleLetter", "Double Letter Scrore"],
    [9, 9, "doubleLetter", "Double Letter Scrore"],
    [12, 8, "doubleLetter", "Double Letter Scrore"],
    [12, 1, "doubleLetter", "Double Letter Scrore"],
    [13, 7, "doubleLetter", "Double Letter Scrore"],
    [13, 9, "doubleLetter", "Double Letter Scrore"],
    [12, gridSize, "doubleLetter", "Double Letter Scrore"],
    [gridSize, 4, "doubleLetter", "Double Letter Scrore"],
    [gridSize, 12, "doubleLetter", "Double Letter Scrore"],
    //tripleLetter
    [2, 6, "tripleLetter", "Triple Letter Scrore"],
    [2, 10, "tripleLetter", "Triple Letter Scrore"],
    [6, 2, "tripleLetter", "Triple Letter Scrore"],
    [6, 6, "tripleLetter", "Triple Letter Scrore"],
    [6, 10, "tripleLetter", "Triple Letter Scrore"],
    [6, 14, "tripleLetter", "Triple Letter Scrore"],
    //bottom half
    [10, 2, "tripleLetter", "Triple Letter Scrore"],
    [10, 6, "tripleLetter", "Triple Letter Scrore"],
    [10, 10, "tripleLetter", "Triple Letter Scrore"],
    [10, 14, "tripleLetter", "Triple Letter Scrore"],
    [14, 6, "tripleLetter", "Triple Letter Scrore"],
    [14, 10, "tripleLetter", "Triple Letter Scrore"],
    //double word
    [2, 2, "doubleWord", "Double Word Scrore"],
    [2, 14, "doubleWord", "Double Word Scrore"],
    [3, 3, "doubleWord", "Double Word Scrore"],
    [3, 13, "doubleWord", "Double Word Scrore"],
    [4, 4, "doubleWord", "Double Word Scrore"],
    [4, 12, "doubleWord", "Double Word Scrore"],
    [5, 5, "doubleWord", "Double Word Scrore"],
    [5, 11, "doubleWord", "Double Word Scrore"],
    //bottom
    [11, 5, "doubleWord", "Double Word Scrore"],
    [11, 11, "doubleWord", "Double Word Scrore"],
    [12, 4, "doubleWord", "Double Word Scrore"],
    [12, 12, "doubleWord", "Double Word Scrore"],
    [13, 3, "doubleWord", "Double Word Scrore"],
    [13, 13, "doubleWord", "Double Word Scrore"],
    [14, 2, "doubleWord", "Double Word Scrore"],
    [14, 14, "doubleWord", "Double Word Scrore"],

    //center
    [Math.ceil(gridSize / 2), Math.ceil(gridSize / 2), "center", "★"],
  ];

  function determineClass(index, row, col) {
    // const currentSpace = [row, col];
    let style = "space";
    // console.log(specialSpace[1][0]);
    for (let i = 0; i < specialSpace.length; i++) {
      //   console.log(specialSpace[i]);
      if (row === specialSpace[i][0] && col === specialSpace[i][1]) {
        style = `space ${specialSpace[i][2]}`;
        // console.log("win");
      }
    }

    return style;
  }

  function determineText(row, col) {
    // const currentSpace = [row, col];
    let text = "";
    // console.log(specialSpace[1][0]);
    for (let i = 0; i < specialSpace.length; i++) {
      //   console.log(specialSpace[i]);
      if (row === specialSpace[i][0] && col === specialSpace[i][1]) {
        text = specialSpace[i][3].toUpperCase();
        // console.log("win");
      }
    }

    return text;
  }
  return (
    <div className="gridBorders">
      <ul className="innerGridContainer">
        {gridArray.map((box, index) => {
          col++;
          if (col % 16 === 0) {
            row++;
            col = 1;
          }
          return (
            <li key={index} className={determineClass(index, row, col)}>
              {determineText(row, col)}
              {/* r{row}c{col} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
