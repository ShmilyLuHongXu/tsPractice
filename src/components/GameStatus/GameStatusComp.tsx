import { chessType, gameStatus } from "../../types/enums"
import './GameStatusComp.css'
interface IProps {
    status: gameStatus,
    nextChess: chessType.red | chessType.black
}
export function GameStatusComp({ status, nextChess }: IProps) {
    let text: JSX.Element = <div>请落子</div>
    if (status === gameStatus.gaming) {
        if (nextChess === chessType.red) {
            text = <div className="status red">红方下子</div>
        } else {
            text = <div className="status black">黑方下子</div>
        }
    } else {
        if (status === gameStatus.redWin) {
            text = <div className="win red">红方胜利</div>
        } else if (status === gameStatus.blackWin) {
            text = <div className="win black">黑方胜利</div>
        } else if (status === gameStatus.draw) {
            text = <div className="draw">平局</div>
        }
    }
    return (
        <div className="game-status">
            {text}
        </div>
    )
}