/**
 * 数组扩展 demo
 */

/**
 * Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
 * Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种Unicode字符，可以避免JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug。
 * Array.from()可以将各种值转为真正的数组，并且还提供map功能。
 */
export function gernerateArray(o) {
    let a = Array.from(o);
    return a;
}