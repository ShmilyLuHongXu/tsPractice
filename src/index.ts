// 约束对象
// interface User {
//     name: string
//     age: number
//     sayHello: () => void
// }
// type User2 = {
//     name: string
//     age: number
// }
// let u: User = {
//     name: 'xiaoming',
//     age: 12,
//     sayHello() {
//         console.log(123)
//     }
// }
//约束函数

// interface Condition {
//     (n: number): boolean
// }
// type Condition = (n: number) => boolean
// type Condition = {
//     (n: number): boolean
// }
// function sum(numbers: number[], callBack: Condition) {
//     let s = 0
//     numbers.forEach(n => {
//         if (callBack(n)) {
//             s += n
//         }
//     })
//     return s
// }
// let result = sum([1, 2, 3, 4], (n) => n % 2 !== 0)
// console.log(result)

// 接口的继承

// interface T1 {
//     t1: number
// }
// interface T2 {
//     t2: string
// }
// interface T3 extends T1, T2 {
//     t3: boolean
// }

// type T1 = {
//     t1: number
// }
// type T2 = {
//     t2: string

// }
// type T3 = {
//     t3: boolean
// } & T1 & T2

// let u: T3 = {
//     t3: false,
//     t1: 1,
//     t2: 'e'
// }

// 只读修饰符
// 限制对象
interface User {
    readonly id: string
    name: string
    age: number
    readonly arrs: readonly string[]
}
let u: User = {
    id: '123',
    name: 'dfff',
    age: 12,
    arrs: ['q', 'w', 'e']
}

// u.id = '333'

// u.arrs=['3','4']  // 只读 类似 const

// u.push() //所有改变原数组的数组的方法都不可使用，因为定义的是一个只读类型的数组


// 限制数组

// let arr: readonly number[] = [1, 2, 3]
// arr = [345, 23]
// 上下对比，阻止数组改变用 const 定义数组
// const arr: readonly number[] = [1, 2, 3]
// arr = [345, 23]

let arr: readonly number[] = [1, 2, 3]
// arr.push()   //所有改变原数组的数组的方法都不可使用，因为定义的是一个只读类型的数组
// arr[0] =2

