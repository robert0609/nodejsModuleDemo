/**
 * 对象扩展 demo
 */

/**
 * ES6提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
 * 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
 */
export function checkValueEqual(o1, o2) {
    let a = o1 === o2;
    let b = Object.is(o1, o2);
    return [a, b];
}

/**
 * Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
 * 属性名为Symbol值的属性，也会被Object.assign拷贝。
 */
export function assignObject(...sourceObjects) {
    let target = {};

    let source = {
        name: 'zhang three',
        'sex': 1,
        [Symbol.for('Car brand')]: 'lexus',
        info: {
            'description': 'very beautiful!'
        }
    };

    Object.assign(target, ...sourceObjects, source);

    return target;
}

/**
 * 扩展运算符(ES2017才支持)
 * 对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。
 */
// export function expandOperator() {
//     let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

//     let w = { a: 56, ...z };

//     return {x, y, z, w};
// }