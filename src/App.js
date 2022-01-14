import "./App.css";

import MakeGridStack from "./components/MakeGridStack";

export default function App() {
  return (
    <div className="App">
      <div className="fullBoard">
        <div className="scrabble top"> SCRABBLE</div>

        <div className="middleDiv">
          <div className="leftLegend">dfasdf</div>
          <MakeGridStack />
          <div className="middleRight">
            <p className="scrabble right">SCRABBLE</p>
          </div>
        </div>
        <p className="scrabble">SCRABBLE</p>
        {/* <MakeSingleRow /> */}
      </div>
    </div>
  );
}
