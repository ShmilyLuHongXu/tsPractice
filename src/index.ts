type jockerObj = {
    jockerNumber: number
    color: jockerColor
}
type jockerColor = '♣️' | '♦️' | '♥️' | '♠️'
type jockerArray = jockerObj[]
/**
 * 创建扑克牌(不包含大小王)
 */
function creatPocker(): jockerArray {
    const deck: jockerArray = []
    for (let i = 1; i <= 13; i++) {
        deck.push({
            jockerNumber: i,
            color: '♠️'
        })
        deck.push({
            jockerNumber: i,
            color: '♣️'
        })
        deck.push({
            jockerNumber: i,
            color: '♥️'
        })
        deck.push({
            jockerNumber: i,
            color: '♦️'
        })

    }
    return deck
}
function printDocker(deck: jockerArray) {
    let result = '\n'
    deck.forEach((card, i) => {
        let str = card.color
        if (card.jockerNumber <= 10) {
            str += card.jockerNumber
        }
        if (card.jockerNumber === 11) {
            str += 'J'
        }
        if (card.jockerNumber === 12) {
            str += 'Q'
        }
        if (card.jockerNumber === 13) {
            str += 'K'
        }
        result += str + '\t'

        if ((i + 1) % 4 === 0) {
            result += '\n'
        }
    })
    console.log(result)

}
let jeckarr = creatPocker()
printDocker(jeckarr)