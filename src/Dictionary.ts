
interface Callback<T, U> {
    (key: T, val: U): void
}
export class Dictionary<k, v> {
    private keys: k[] = []
    private vals: v[] = []
    // 判断字典中是否包含某个key，如果没有，则添加,如果有，则修改
    set(key: k, val: v) {
        let i = this.keys.indexOf(key)
        if (i < 0) {
            this.keys.push(key)
            this.vals.push(val)
        } else {
            this.vals[i] = val
        }
    }
    // 遍历字典类，接收一个回调函数
    forEach(callback: Callback<k, v>) {
        this.keys.forEach((k, i) => {
            callback(k, this.vals[i])
        })
    }
    // 判断字典中是否包含某个key
    has(key: k) {
        return this.keys.includes(key)
    }
    // 根据key，删除对应的键值对
    delete(key: k) {
        let i = this.keys.indexOf(key)
        if (i !== -1) {
            this.keys.splice(i, 1)
            this.vals.splice(i, 1)
        }
    }
    // 当前字段的长度
    size() {
        return this.keys.length
    }
}