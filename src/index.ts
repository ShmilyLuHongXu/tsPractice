// 泛型限制接口，类型别名
// 回调函数
// type callBack<T> = (n: T, i: number) => boolean
// 接口
// interface callBack<T> {
//     (n: T, i: number): boolean
// }
// function filtrate<U>(arr: U[], callBack: callBack<U>): U[] {
//     const newArr: U[] = []
//     arr.forEach((item, i) => {
//         if (callBack(item, i)) {
//             newArr.push(item)
//         }
//     })
//     return newArr

// }
// let result = filtrate<number>([2, 8, 4, 5, 6, 7], n => n % 2 === 0)
// console.log(result);

// 类
import { ArrayHelper } from "./arrHelper";
let newObj = new ArrayHelper([1, 2, 3, 4, 5])
let arr = newObj.getNewArr()
console.log(arr)
console.log(newObj);

