import { jockerNumber, jockerColor } from "./enums"
// // jockerArray 不再是包含数字排面的数组，现在让它变成一个所有卡牌牌面的字符串
// export type jockerArray = Card[] //使用 类优化 见deck.ts文件
// 设置接口Card，只包含牌面的字符串
export interface Card {
    getString(): string
}
// 让所有数字排面继承 Card
export interface jockerObj extends Card {
    number: jockerNumber
    color: jockerColor
}
// 让大小王牌面继承 Card
export interface Joker extends Card {
    type: '大王' | '小王'
}