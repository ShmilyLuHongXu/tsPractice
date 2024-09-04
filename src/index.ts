let say:string = 'hello'

console.log('hi hello')
//首先 typescript 是js的超集 整数分为正整数和副整数，那么整数就是超集，可以这么理解
// typescript 是一个可选的静态的类型约束系统
//可选的 意思就是说，你可以选择使用类型约束，也可以不使用，不想使用可以设置类型为any
//静态的 意思就是说 ts的类型检查是发生在编译的时候，而不是运行的时候，从打包文件时就可以看出，打包生成的文件不包含ts代码
//所以从ts检查时机上来说，ts就是静态的
//类型系统 对项目中的 变量，函数，函数参数，函数返回值 进行类型约束

//ts的基本约束类型
// 数字 -- number
let num:number
num = 123
// 字符串 --- string
let str :string= '2333'
//布尔值 --- boolean
let isTrue:boolean = false
//数组 --- []
let arr:string[]=['1','2','3']
let arr2:number[]=[1,2,3]
let arr3:Array<number>=[4,5,6,8]
// let arr3:[]=['1',2,true] //定义的是空的，那么他就得是空的
// 对像 -- object
let obj : { 
    nomal:string;
    readonly name:string ;//只读属性
     age ?: number ;//可选属性
     [propName:string]:any;//任意属性
    } = {nomal:'正常属性',name:'只读属性',someVal:'任意属性','suibian':'任意属性'}
// obj.name='456'  name为只读属性

// null和undefined  是其他类型的子集
let every :null=null
let every2:undefined = undefined
obj = every
obj = every2
// 严格空值检查 通过在配置项中 设置 ‘--strictNullChecks’ ，可以控制ts禁止将null和undefined赋值给其他类型其他变量
//在启用严格空值检查后，所有的变量都默认不包含 null 和 undefined，除非显式声明为联合类型
function checks(name:string,age?:number|null):{name:string|null}{
    return {name:name}
}
// 还可以通过类型保护，来安全的控制null和undefined
function checks2(name:string,age:number|null):string{
    if(age===null){
        return '类型保护'
    }
    return '123'
}
// TypeScript 还提供了非空断言操作符 !，用于告诉编译器某个值不会是 null 或 undefined
let user :{name:string|null}=checks('hahahh')
console.log(user!.name)// ! 为非空断言操作符，用以避免null和undefined的结果

//其他类型
// 联合类型
let unmber :number|string = 123
unmber = '234'
// void 用来限制函数返回值，表示被限制函数没有返回值
function tese():void{
    // return '123' 
}
//never 用来限制函数返回值，表示该函数没有执行尽头或者抛出异常
function typeNever():never{
    throw new Error('teeeeee')
}
function typeNever2():never{
    while(true){
        //...
    }
}
//元祖类型 一种特殊的数组类型 表示固定长度，每一项类型都确定的数组
let mytuple :[number,string] = [1,'3']
mytuple = [3,'4']
let mytuple2 :readonly [number,string] = [1,'3']
mytuple2 = [5,'4']

//any类型 表示任意类型，可以绕过类型检查，可以赋值给任意类型
let aryd :any = 234
mytuple = aryd // 不安全