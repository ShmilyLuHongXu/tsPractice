enum Permision {
    Add = 1,      //0001
    Del = 2,      //0010
    Update = 4,   //0100
    Query = 8,    //1000
    Write = 16     //10000
}
// 如何组合权限？

//              0001
// 位运算 ： 或运算 |    可以将 0 看作 假，1看作 真；或运算，有一个为真，则为真；
//              0100
// 故 运算结果为  0101
let p: Permision = Permision.Add | Permision.Update;

// 如何判断是否拥有某个权限

// 0101
// 位运算 ：且运算 &  两个都为真，则为真
// 0001

function hasPermision(target: Permision, per: Permision) {
    return (target & per) === per
}
// console.log(hasPermision(p, Permision.Add))

// 如何删除某个权限

// 0101
//  位运算 ：异或运算 ^ 两个都为真，则为假
// 0001
// 0100
function deletePermision(target: Permision, delT: Permision): Permision {
    return target = target ^ delT
}
p = deletePermision(p, Permision.Update)

console.log(hasPermision(p, Permision.Update))