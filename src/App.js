import "./App.css";

import Letters from "./data/letterList.json";
import ScrabbleGrid from "./components/ScrabbleGrid";

export default function App() {
  const whiteTileList = "scrabble";

  // function makeWhiteTileList() {
  //   whiteTileList.split("").map((letter) => {
  //     return <li className="whiteTiles">{Letter}</li>;
  //   });
  // }

  return (
    <div className="App">
      <div className="fullBoard">
        <div className="scrabble top">Scrabble</div>
        <div className="centerBlock">
          <div className="leftBlock">
            <div>
              <ul className="tileList">
                {}

                <li className="whiteTiles">
                  S<span className="subscript">1</span>
                </li>
                <li className="whiteTiles">
                  C<span className="subscript">3</span>
                </li>
                <li className="whiteTiles">
                  R<span className="subscript">1</span>
                </li>
                <li className="whiteTiles">
                  A<span className="subscript">1</span>
                </li>
                <li className="whiteTiles">
                  B<span className="subscript">3</span>
                </li>
                <li className="whiteTiles">
                  B<span className="subscript">3</span>
                </li>
                <li className="whiteTiles">
                  L<span className="subscript">1</span>
                </li>
                <li className="whiteTiles">
                  E<span className="subscript">1</span>
                </li>
                <li>©</li>
              </ul>
              <div className="letterLegend">
                LETTER
                <br /> DISTRIBUTION
                <ul className="legendList">
                  {Letters.map((letter) => {
                    if (letter.title !== "BLANK") {
                      return (
                        <li key={letter.title + letter.count}>
                          {letter.title} - {letter.count}
                        </li>
                      );
                    }
                  })}
                </ul>
                <p>
                  {Letters[Letters.length - 1].title} -{" "}
                  {Letters[Letters.length - 1].value}
                </p>
              </div>
              <div className="copyrightInfo">
                <p>
                  COPYRIGHT 154 & U S COPYRIGHT 148 by PRODUCTION AND MARKETING
                  COMPANY
                </p>
                <p>NEWTOWN CONN.</p>
              </div>
            </div>
          </div>
          <div className="centerGrid">
            <ScrabbleGrid />
          </div>
          <div className="rightBlock">
            <p className="scrabble right">Scrabble</p>
          </div>
        </div>
        <div className="scrabble bottom">Scrabble</div>
      </div>
    </div>
  );
}
