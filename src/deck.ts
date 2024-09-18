import { jockerNumber, jockerColor } from "./enums";
import { Card, Joker } from "./types";
interface distingCardsResult {
    plear1: deck
    plear2: deck
    plear3: deck
    Tabletop: deck
}
export class deck {
    cards: Card[] = []
    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards
        } else {
            this.init()
        }
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
    /**
     * 发牌功能
     * 斗地主  三个人三副牌，最终桌面剩下三张牌
     * 返回四个数组
     */
    distingCards(): distingCardsResult {
        let plear1: deck, plear2: deck, plear3: deck, Tabletop: deck
        plear1 = this.takeCards(17)
        plear2 = this.takeCards(17)
        plear3 = this.takeCards(17)
        Tabletop = new deck(this.cards)
        return {
            plear1,
            plear2,
            plear3,
            Tabletop
        }
    }
    private takeCards(n: number): deck {
        const cards: Card[] = []
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card)

        }
        return new deck(cards)
    }
    /**
     *洗牌功能
     * @memberof deck
     */
    shutter() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length)
            const temp = this.cards[i]
            this.cards[i] = this.cards[targetIndex]
            this.cards[targetIndex] = temp
        }
    }
    /**
     * 获取随机数
     * @param min 
     * @param max 
     */
    private getRandom(min: number, max: number) {
        const dec = max - min
        return Math.floor(Math.random() * dec + min)
    }
}