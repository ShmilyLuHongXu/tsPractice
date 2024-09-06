//按需导出
export const numbers = '123'

export function sum(a: number, b: number) {
    return a + b
}

function complair(a: number, b: number) {
    return a === b
}
//默认导出
export default {
    a: 123,
    b: '456',
    complair
}
// es6
// 默认导出与导入 注意:每个模块中只允许使用唯一的一次 export default。
// // m1.js
// let a = 10;
// let c = 20;
// function show() {}
// export default {
//   a,
//   c,
//   show
// }

// // 导入模块成员
// import m1 from './m1.js';
// console.log(m1);
// // 输出结果: { a: 10, c: 20, show: [Function: show] }


//  按需导入与导出 每个模块中可以使用多次按需导出
// // m1.js  
// export let s1 = 's1111';
// export let s2 = 's22222';
// export function say() { }

// // 导入模块成员
// import { s1, say } from './m1.js';
// console.log(s1);  // 输出 's1111'

// 直接导入与导出  将所有导出的成员作为属性挂载到接收对象上
// // m1.js
// let s1 = 's1';
// let s2 = 's2';
// function say() {}
// export { s1, s2, say };

// // 导入模块成员  
// import * as m1 from './m1.js';
// console.log(m1.s1);  // 输出 's1'
// m1.say();

//按需命名导入与导出
// m1.js
// export let s1 = 's1';
// export { s1 as str1 };

// // 导入模块成员
// import { str1 } from './m1.js';
// console.log(str1);  // 输出 's1'