interface ConstraintArray {
    length: number
}

function loggingIdentity<T extends ConstraintArray>(arg: T): T {
    console.log(arg.length)
    return arg
}

loggingIdentity({ length: 3, value: '4' })