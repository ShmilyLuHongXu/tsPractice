import { BordComp } from "./components/BordComp/BordComp";
import { chessType } from "./types/enums";

function App() {
  let chesses: chessType[] = [
    chessType.red,
    chessType.none,
    chessType.black,
    chessType.red,
    chessType.black,
    chessType.red,
    chessType.none,
    chessType.red,
    chessType.none,
  ]
  return (
    <div className="App">
      <BordComp isGameOver={false} chesses={chesses} onclick={(index) => console.log(index)} />
    </div>
  );
}


export default App;
