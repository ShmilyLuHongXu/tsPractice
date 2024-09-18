class User {
    readonly name: string
    // age: number //年龄简写
    pid?: string
    private _book: number
    constructor(name: string, private _age: number, book: number, pid?: string) {
        this.name = name
        // this.age = age
        if (pid !== undefined) {
            this.pid = pid
        }
        this._book = book
    }
    // 私有参数在类内部使用
    usebookNum() {
        console.log(this._book)
    }
    // 访问器
    set age(value: number) {
        if (value < 0) {
            this._age = 0
        } else if (value > 200) {
            this._age = 200
        } else {
            this._age = value
        }
    }
    get age() {
        return Math.floor(this._age)
    }
}
let u = new User('zhangsan', 18, 3)
// u.name = '122'
// console.log(u.name)
u.usebookNum()
u.age = 1.5
console.log(u.age)
console.log(u)
