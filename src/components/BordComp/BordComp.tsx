import { chessType } from "../../types/enums"
import { ChessComp } from "../ChessComp/ChessComp"
import './BordComp.css'
interface IProps {
    chesses: chessType[],
    isGameOver: boolean,
    onclick?: (index: number) => void
}
export function BordComp({ chesses, onclick, isGameOver = false }: IProps) {
    let list = chesses.map((chess, index) => {
        return <ChessComp type={chess} key={index} onclick={() => {
            if (onclick && !isGameOver) {
                onclick(index)
            }
        }} />
    })
    return (
        <div className="bord">
            {list}
        </div>
    )
}
