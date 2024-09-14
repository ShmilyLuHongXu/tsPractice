import { jockerNumber, jockerColor } from "./enums"
import { Card, jockerArray, Joker } from "./types"

/**
 * 创建扑克牌(不包含大小王)
 */
export function creatPocker(): jockerArray {
    const deck: jockerArray = []
    const marks = Object.values(jockerNumber)
    const colors = Object.values(jockerColor)
    for (const m of marks) {
        for (const c of colors) {
            // 方式1
            // const card = {
            //     number: m,
            //     color: c,
            //     getString() {
            //         return this.color + this.number
            //     }
            // }
            // deck.push(card)
            // 方式2
            deck.push({
                number: m,
                color: c,
                getString() {
                    return this.color + this.number
                }
            } as Card)
        }
    }
    let JockerType: Joker = {
        type: '大王',
        getString() {
            return '大王'
        },
    }
    deck.push(JockerType)
    JockerType = {
        type: '小王',
        getString() {
            return '小王'
        },
    }
    deck.push(JockerType)
    return deck
}

export function printDocker(deck: jockerArray) {
    let result = '\n'
    deck.forEach((card, i) => {


        result += card.getString() + '\t'

        if ((i + 1) % 4 === 0) {
            result += '\n'
        }
    })
    console.log(result)

}