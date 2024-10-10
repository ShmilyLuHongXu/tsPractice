import { log } from "console";
import { Dictionary } from "./Dictionary";

const d = new Dictionary<string, number>()
d.set('a', 1)
d.set('a', 11)
d.set('b', 2)
// d.forEach((k, v) => {
//     console.log(k);
//     console.log(v);
// })
let result = d.has('c')
// console.log(result);
// d.delete('a')
// d.delete('b')
d.forEach((k, v) => {
    console.log(k);
    console.log(v);
})
console.log(d.size());

