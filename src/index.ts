// import { numbers, sum } from "./myModules";
// import myModules from "./myModules";
// console.log(sum(1, 2))
// console.log(numbers)
// console.log(myModules.a)
// console.log(myModules.complair(1, 2))

// 在ts中使用commonjs
// import myModules from "./myModules";
import myModules = require("./myModules")
console.log(myModules.a)