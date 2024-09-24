// 将两个数组进行混合

function mixinArray<T, L>(arr1: T[], arr2: L[]): (T | L)[] {
    if (arr1.length != arr2.length) {
        throw new Error('两个数组长度不一致')
    }
    let result: (T | L)[] = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result
}

let r = mixinArray<number, string>([1, 2, 3, 4], ['1', '3', 'true', '4'])
console.log(r);
