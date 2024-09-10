import { jockerNumber, jockerColor } from "./enums"
import { jockerArray } from "./types"

/**
 * 创建扑克牌(不包含大小王)
 */
export function creatPocker(): jockerArray {
    const deck: jockerArray = []
    const marks = Object.values(jockerNumber)
    const colors = Object.values(jockerColor)
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                number: m,
                color: c
            })
        }
    }
    return deck
}

export function printDocker(deck: jockerArray) {
    let result = '\n'
    deck.forEach((card, i) => {
        let str = card.color + card.number

        result += str + '\t'

        if ((i + 1) % 4 === 0) {
            result += '\n'
        }
    })
    console.log(result)

}