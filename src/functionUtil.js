/**
 * 函数扩展 demo
 */

/**
 * 如果参数默认值是变量，那么参数就不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
 * 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
 */
export function defaultParameter() {
    let x = 99;
    let a = foo();
    x = 100;
    let b = foo();
    return [a, b];

    function foo(p = x + 1) {
        return p;
    }
}

/**
 * 扩展运算符还可以将字符串转为真正的数组。有一个重要的好处，那就是能够正确识别32位的Unicode字符。
 */
export function expandOperator() {
    let a = 'x\uD83D\uDE80y'.length;
    let b = [...'x\uD83D\uDE80y'].length;
    return [a, b];
}

/**
 * lamda表达式(箭头函数)
 * 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
 * 另外，由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
 */
export function generateArrowFunction() {
    let afn = () => {
        return this.id;
    };

    return afn;
}