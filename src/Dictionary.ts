export class Dictionary<k, v> {
    private keys: k[] = []
    private vals: v[] = []
    // 判断字典中是否包含某个key，如果没有，则添加
    set(key: k, val: v) {
        let i = this.keys.indexOf(key)
        if (i < 0) {
            this.keys.push(key)
            this.vals.push(val)
        } else {
            this.vals[i] = val
        }
        console.log(this.keys)
        console.log(this.vals)
    }
}