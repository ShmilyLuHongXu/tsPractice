import { deck } from './deck'
let d = new deck()
console.log('======== 第一次洗牌=========')
d.shutter()
d.printDocker()
console.log('======== 分牌中。。。。=========')
let result = d.distingCards()
console.log('=======玩家1的牌====')
result.plear1.printDocker()
console.log('=======玩家2的牌====')
result.plear2.printDocker()
console.log('=======玩家3的牌====')
result.plear3.printDocker()
console.log('=======桌面上的牌====')
result.Tabletop.printDocker()