## typeScript

typescript 是 javascript 的超集

- 静态的

  > 类型检查发生的时间，是在编译的时候，而不是运行的时候

  > ts 是不参与任何运行时的类型检查，因为运行时，已经被编译成了 js 代码，所以最终运行的是 js 代码

- 可选的

  可以用 ts 也可以不用

- 类型系统

  对代码中所有的标识符（变量、函数、参数、返回值）进行类型检查

### tsconfig.json 中的 lib 是 es6，不支持 node 编译

- 下载@types/node 插件库
  > 解决 node 编译问题

### 简化编译及运行流程，让 ts 在编译后直接运行

- 下载 ts-node 插件库
  > ts-node src/index.ts

### 监控代码变化，程序改变后，自动编译执行

1. 下载 nodemon 插件
   > nodemon --exec ts-node src/index.ts
2. 问题：使用 nodemon 实时监控后，发现监控范围太广，任何文件改变都会被监听，所以添加限制,只监听 ts 文件的变化
   > nodemon -e ts --exec ts-node src/index.ts
3. 问题：此时，监控了程序中所有的 ts 后缀的文件夹，现在只想监听 src 目录下的文件夹
   > nodemon --watch src -e ts --exec ts-node src/index.ts

### 基本类型的约束

#### 如何进行类型约束

只需要 在 变量、函数的参数、函数的返回值位置添加 `:类型`
ts 在 很多场景下可以进行类型推导，推导出来的类型和自己定义的类型是一样的

1. 我怎么知道哪些会进行类型推导？
   > 可以查看代码下面是否有 三个点，这三个点相当于一个提示，提醒这个变量 ts 无法进行类型推导
2. any 类型
   > 表示任意类型，对该类型，ts 不会进行任何类型检查
3. 如何区分数字字符串和数字？
   > 关键看怎么读
   > 如果按照数字的方式朗读，则为数字；否则为数字字符串

#### 源代码和编译结果的差异

编译结果中没有类型约束信息

## 基本类型

- number：数字
- string：字符串
- boolean：布尔值
- 数组
- object 对象
- null 和 undefined

null 和 undefined 是所有其他类型的子类型，他们可以赋值给其他类型

比如

```javascript
let val: string = undfined;
val.toUpperCase();
```

这样不会报错，也就失去了 ts 类型检查的作用

解决办法就是在配置文件中添加配置选项 `"strictNullChecks": true` ,null 和 undefined 只能赋值给自身

## 其他常用类型

- 联合类型:多种类型任选其一

配合类型保护进行判断
类型保护:当对某个变量进行类型判断之后，在判断的语句块中便可以确定它的确切类型，typeof 可以触发类型保护。typeof 只能判断基本类型

- void 类型:通常用于约束函数的返回值，表示该函数没有任何返回

- never 类型:通常用于约束函数的返回值，表示该函数永远不可能结束

- 字面量类型:使用一个值进行约束

- 元祖类型(Tup1e):一个固定长度的数组，并且数组中每一项的类型确定

- any 类型:any 类型可以绕过类型检查，any 数据类型可以赋值给任意类型

### 类型别名

对已知的类型定义名称，简化代码，降低维护成本

关键字 **type**

```typescript
type '类型名称' = '类型定义'
```

### 函数的相关约束

- 函数重载:在函数实现之前，对函数调用的多种情况进行声明

- 可选参数:可以在某些参数名后加上问号，表示该参数可以不用传递。可选参数必须在参数列表的未尾

# 拓展类型

## 枚举

- 枚举通常用来约束某个变量的取值范围

- 字面量类型和联合类型结合使用，也可以达到同样的目标

- 枚举会出现在编译结果中，在编译结果中表现为对象

## 如何定义枚举

```typescript
enum '枚举名称' {
   '枚举值1':'值1',
   '枚举值2':'值3',
   // ...
}
```

## 字面量类型的问题（为什么要使用枚举）

- 在类型约束位置，会产生重复代码；使用 类型别名可以解决此问题。

- 逻辑含义和真实的值产生了混淆，会导致当修改真实值的时候，产生大量的修改，提高了维护成本。

- 字面量类型不会进去到编译结果

## 枚举的规则

- 枚举的字段值可以是字符串或数字

- 数字枚举的值会自增

- 被数字枚举约束的变量，可以直接赋值为数字

- 数字枚举的编译结果 和 字符串枚举有差异

## 枚举的最佳实践

- 尽量不要在一个枚举中即出现字符串字段，又出现数字字段

- 使用枚举时，尽量使用字段的名称，而不使用真实的值

## 拓展知识 （枚举的位运算）

- 针对数字枚举

- 位运算 ：将两个数字转换为二进制后的运算

# TS 如何使用模块话语法

- 在 ts 中，导入和导出模块，都使用 es6 模块话标准

# 编译结果中的模块化

- 如果编译结果模块化标准设置的是 es6 ：那么在编译结果中没有变化

- 如果编译结果模块化标准设置的是 commonjs：

- 在编译结果中，导出的声明会变成 **exports** 的属性，默认导出则会变成**exports**的 default 属性
- 编译结果的导入中，会拿到整个的导入对象，然后依次去取导出的属性，默认导入则会变成导入对象的**default**属性

# 解决默认导入的问题

- 对于一下使用**module.exports={}**方式导出的模块，例如 fs 模块，使用 **import fs from ’fs‘** 时报错，解决办法就是

- 就是在配置文件中添加配置 **esModuleInterop**配置设置为 true 或者使用 **import {readFile} from 'fs'** 或 **import \* as fs from 'fs'** 方式导入即可结局错误

- 目的就是项目中所有的导入导出标准全部使用 es6 标准，保持统一性

# 如何在 ts 中书写 commonjs

- 导出 `export = {xxx}`

- 导入 `import xxx  = require('xxx')` 或 `import xxx from 'xxx`' _注意使用后者在配置项中需要设置 esModuleInterop 配置项为 true_

# 总结

Typescript 是可选的、静态的类型系统

- 为什么需要类型系统?

要构建大型的应用，会涉及大量的函数和扫口，如果没有类型检查，会产生大量的调试成本。类型系统可以降低调试成本，从而降低开发成本

- 可选的

TS 是 JS 的超集。1s 的所有功能都能够在 ETS 中使用，增加的部分是类型系统。
