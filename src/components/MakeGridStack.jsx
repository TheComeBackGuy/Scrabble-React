import MakeSingleRow from "./MakeSingleRow";
import React from "react";

export default function MakeGridStack() {
  const lengthOfBoard = 15;
  const gridStack = [];
  for (let i = 0; i < lengthOfBoard; i++) {
    gridStack.push(<MakeSingleRow rowNumber={i} />);
  }
  return (
    <div className="gridStack">
      {gridStack.map((row) => {
        return (
          <div key={gridStack.id} className="row">
            row
          </div>
        );
      })}
    </div>
  );
}
