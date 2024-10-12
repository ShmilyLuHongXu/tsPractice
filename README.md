

### `npm start`

### 非空断言    ```!```
非空断言（Non-Null Assertion）是一种 TypeScript 的语法特性，它允许开发者告诉 TypeScript 某个值不可能为 null 或 undefined。

在 TypeScript 中，使用非空断言可以通过在值后面添加 ! 符号来实现。例如：

```ts
let name: string | null = 'John';
console.log(name!.toUpperCase()); // 非空断言
```
在这个例子中，name 变量可能为 null，但是通过添加 ! 符号，我们告诉 TypeScript 它不可能为 null。因此，TypeScript 不会报错，并且允许我们调用 toUpperCase() 方法。

但是，如果在运行时 name 实际上为 null，那么程序仍然会抛出错误。因此，非空断言应该谨慎使用，只有当开发者确定值不可能为 null 时才应该使用。

非空断言通常用于以下场景：

当开发者确定某个值不可能为 null 时，可以使用非空断言来告诉 TypeScript。
当某个值已经被 null 检查过了，可以使用非空断言来避免重复的 null 检查。
总之，非空断言是一种有用的语法特性，但是应该谨慎使用，以避免掩盖潜在的错误。






