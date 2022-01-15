import "./App.css";

import Letters from "./data/letterList.json";
// import RandomizedLetters from "./components/RandomizedLetters";
import ScrabbleGrid from "./components/ScrabbleGrid";

export default function App() {
  // function makeWhiteTileList() {
  //   whiteTileList.split("").map((letter) => {
  //     return <li className="whiteTiles">{Letter}</li>;
  //   });
  // }

  return (
    <div id="app" className="App">
      {/* <RandomizedLetters /> */}
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
                    let item = null;
                    if (letter.title !== "") {
                      item = (
                        <li key={letter.title + letter.count}>
                          {letter.title} - {letter.count}
                        </li>
                      );
                    }
                    return item;
                  })}
                </ul>
                <p>BLANK - {Letters[Letters.length - 1].value}</p>
              </div>
              <div className="copyrightInfo">
                <div className="dash">{""}</div>
                <p>
                  <i>Manufactured by</i>
                </p>
                <p>SELCHOW & RIGHTER CO, NEW YORK N.Y.</p>
                <p>PRODUCTION AND MANUFACTURING COMPANY</p>
              </div>
            </div>
          </div>
          <div className="centerGrid">
            <ScrabbleGrid />
          </div>
          <div className="rightBlock">
            <div className="scrabble right">Scrabble</div>
          </div>
        </div>
        <div className="bottomBlock">
          <div></div>
          <div className="scrabble">Scrabble</div>
          <div className="copyrightInfo bottomInfo">
            <p>
              Copyright 1942 <br />
              PRODUCTION AND MANUFACTURING
              <br /> Published in U.S.A
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
