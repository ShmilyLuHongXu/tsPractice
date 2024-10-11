import { chessType } from "../../types/enums";
import './ChessComp.css'
interface IProps {
    type: chessType,
    onclick?: () => void
}
export function ChessComp({ type, onclick }: IProps) {
    let chess = null
    if (type === chessType.red) {
        chess = <div className="red chess-item" ></div>
    } else if (type === chessType.black) {
        chess = <div className="black chess-item"></div>
    }
    return (
        <div className="chess" onClick={() => {
            if (type === chessType.none && onclick) {
                onclick()
            }
        }}>
            {chess}
        </div>
    )
}