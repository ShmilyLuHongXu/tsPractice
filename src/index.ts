
// type jockerColor = '♣️' | '♦️' | '♥️' | '♠️'  类型别名
// 枚举
enum jockerColor {
    heart = '♥',
    clubs = '♣️',
    diamond = '♦️',
    spade = '♠️'
}
enum jockerNumber {
    A = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    eleven = 'J',
    twelve = 'Q',
    king = 'K'
}
type jockerObj = {
    number: jockerNumber
    color: jockerColor
}
type jockerArray = jockerObj[]
/**
 * 创建扑克牌(不包含大小王)
 */
function creatPocker(): jockerArray {
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
function printDocker(deck: jockerArray) {
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
let jeckarr = creatPocker()
printDocker(jeckarr)