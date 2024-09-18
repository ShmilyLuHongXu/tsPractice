import { jockerNumber, jockerColor } from "./enums";
import { Card, Joker } from "./types";

export class deck {
    cards: Card[] = []
    constructor() {
        this.init()
    }
    private init() {
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
                this.cards.push({
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
        this.cards.push(JockerType)
        JockerType = {
            type: '小王',
            getString() {
                return '小王'
            },
        }
        this.cards.push(JockerType)
    }
    printDocker() {
        let result = '\n'
        this.cards.forEach((card, i) => {
            result += card.getString() + '\t'
            if ((i + 1) % 4 === 0) {
                result += '\n'
            }
        })
        console.log(result)
    }
}