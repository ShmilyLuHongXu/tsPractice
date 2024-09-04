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
    const dock: jockerArray = []
    for (let i = 1; i <= 13; i++) {
        dock.push({
            jockerNumber: i,
            color: '♠️'
        })
        dock.push({
            jockerNumber: i,
            color: '♣️'
        })
        dock.push({
            jockerNumber: i,
            color: '♥️'
        })
        dock.push({
            jockerNumber: i,
            color: '♦️'
        })

    }
    console.log(123)
    console.log(dock)
    return dock
}
creatPocker()
console.log(123)
console.log(123)