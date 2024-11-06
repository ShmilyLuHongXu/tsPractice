abstract class animals {
    // name: string;
    age: number;
    constructor(public name: string, age: number) {
        // this.name = name
        this.age = age
    }
    // 添加抽象方法
    abstract eat(): void;
    protected sleep(): void {
        console.log('sleep');

    }
}

class dog extends animals {
    eat(): void {
        console.log('eat');

    }
    // 如何调用父类sleep方法
    dogsleeep(): void {
        this.sleep()
    }
}

const d = new dog('xiaohei', 18);
d.dogsleeep()