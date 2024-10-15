export enum chessType {
    none,
    red,
    black
}
// export enum nextChess {
//     red = chessType.red,
//     black = chessType.black
// }
export enum gameStatus {
    /** 
     * 游戏进行中
    */
    gaming,
    /**
     * 红方胜利
     */
    redWin,
    /**
     * 黑方胜利
     */
    blackWin,
    /**
     * 平局
     */
    draw
}