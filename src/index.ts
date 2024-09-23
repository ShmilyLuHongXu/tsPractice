
/**
 * 
 * @param arr 
 * @param n 
 * @returns 
 */
function draw<T = number>(arr: T[], n: number): T[] {
    if (n > arr.length) {
        return arr
    }
    let newArr: T[] = []
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr
}
let result = draw(['1', 1, '6', '4'], 3)
console.log(result)


