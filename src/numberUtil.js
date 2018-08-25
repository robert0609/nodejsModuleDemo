/**
 * 数值新接口 demo
 */

export function checkInteger() {
    let a = Number.isInteger(24);
    let b = Number.isInteger(24.00);
    let c = Number.isInteger(24.13);
    return [a, b, c];
}