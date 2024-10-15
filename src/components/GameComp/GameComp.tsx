// 创建Game组件
import React from "react";
import { BordComp } from "../BordComp/BordComp";
import { chessType, gameStatus } from "../../types/enums";
import { GameStatusComp } from "../GameStatus/GameStatusComp";
interface IStatus {
    chesses: chessType[]//棋子数组
    gameStatus: gameStatus,//游戏状态
    nextChess: chessType.red | chessType.black//下一个棋子
}
export class GameComp extends React.Component<{}, IStatus> {
    state: IStatus = {
        chesses: [],
        gameStatus: gameStatus.gaming,
        nextChess: chessType.black
    }
    componentDidMount(): void {
        this.init()
    }
    /**
     * 初始化数据
     */
    init() {
        const arr: chessType[] = []
        for (let i = 0; i < 9; i++) {
            arr.push(chessType.none)
        }
        this.setState({
            chesses: arr,
            gameStatus: gameStatus.gaming,
            nextChess: chessType.black
        })
    }
    /**
     * 处理棋子点击事件
     * 如果该函数运行，说明：
     * 1、游戏正在进行
     * 2、点击的位置没有棋子
     * @param index 
     */
    handleChessesClick(index: number) {
        const chesses = [...this.state.chesses]
        chesses[index] = this.state.nextChess
        this.setState({
            chesses: chesses,
            gameStatus: this.getGameStatus(chesses, index),
            nextChess: this.state.nextChess === chessType.red ? chessType.black : chessType.red
        })
    }
    getGameStatus(chesses: chessType[], index: number): gameStatus {
        // 判断是否有一方胜利
        // 横向  最小正
        const horMin = Math.floor(index / 3) * 3
        const verMin = index % 3
        if (chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]
            || chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]
            || chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== chessType.none
            || chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== chessType.none
        ) {
            if (chesses[index] === chessType.red) {
                console.log('红方胜利');

                return gameStatus.redWin
            } else {
                console.log('黑方胜利');

                return gameStatus.blackWin
            }
        }

        // 判断是否平局
        if (chesses.indexOf(chessType.none) === -1) {
            console.log('平局');

            return gameStatus.draw
        }
        // 游戏正在进行
        return gameStatus.gaming
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>三连棋游戏</h1>
                <GameStatusComp status={this.state.gameStatus} nextChess={this.state.nextChess} />
                <BordComp chesses={this.state.chesses} isGameOver={this.state.gameStatus !== gameStatus.gaming} onclick={this.handleChessesClick.bind(this)} />
                <button onClick={() => { this.init() }}>重新开始</button>
            </div>
        )
    }
}