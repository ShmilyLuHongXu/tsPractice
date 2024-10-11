import { ChessComp } from "./components/ChessComp/ChessComp";
import { chessType } from "./types/enums";
function App() {
  return (
    <div className="App">
      <ChessComp type={chessType.none} onclick={() => {
        console.log("1")
      }} />
      <ChessComp type={chessType.red} onclick={() => {
        console.log("2")
      }} />
      <ChessComp type={chessType.black} onclick={() => {
        console.log("3")
      }} />
    </div>
  );
}

export default App;
