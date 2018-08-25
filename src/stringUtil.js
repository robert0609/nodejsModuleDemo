/**
 * 字符串新接口 demo
 */

/**
 * codePointAt() & String.codePointAt() demo
 * codePointAt方法会正确返回32位的UTF-16字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同。
 * 使用for...of循环，因为它会正确识别32位的UTF-16字符。
 * ES6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。
 */
export function stringCodePoint() {
    let s = '\u{20BB7}a';
    //'\u{20BB7}'
    let a = s.codePointAt(0).toString(16);
    //'a'
    let b = s.codePointAt(2).toString(16);
    //'\u{20BB7}a'
    let c = String.fromCodePoint(Number.parseInt(a, 16), Number.parseInt(b, 16));

    return [a, b, c];
}

/**
 * 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
 */
export function stringTransform() {
    let text = 'this is a pen!';
    let a = text.includes('is');
    let b = text.startsWith('a', 8);
    let c = text.endsWith('is', 7);

    let d = text.repeat(2);

    return [a, b, c, d];
}

/**
 * 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
 * 模板字符串的大括号内部，就是执行JavaScript代码
 */
export function templateString(o) {
    let template = `<div>
        ${o.name}的书包在${o.where()}
    </div>`;

    return template;
}