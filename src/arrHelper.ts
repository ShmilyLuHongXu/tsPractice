export class ArrayHelper<T> {
    constructor(private arr: T[]) { }
    getNewArr(): T[] {
        let newArr: T[] = []
        this.arr.forEach((n, i) => {
            newArr.push(n)
        })
        return newArr
    }

}