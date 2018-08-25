/**
 * 解构赋值demo
 */

/**
 * 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
 */
export function destructingArray() {
    let [a, b, c, d = true, ...z] = [0, null, 3];
    return [a, b, c, d, z];
}

export function destructingObject() {
    let o = {
        p1: 'property1', 
        p2: 98, 
        p3: true,
        p4: [
            'hello',
            {p5: 'world'}
        ]
    };
    let {p1, p2, p3: pp3, p4: [x, {p5}]} = o;
    return [p1, p2, pp3, x, p5];
}

export function destructingString() {
    const [a, b, c, d, e] = 'hello';
    return [a, b, c, d, e];
}

/**
 * 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
 * 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
 */
export function destructingBoolAndNumber() {
    let {toString: s1} = 123;
    let {toString: s2} = false;
    return [s1, s2];
}

export function destructingFunctionParameter() {
    let r1 = add([1, 2]);
    
    let r2 = move({x: 3, y: 8});
    let r3 = move({x: 4});
    let r4 = move({});
    let r5 = move();

    let r6 = pack({x: 3, y: 8});
    let r7 = pack({x: 4});
    let r8 = pack({});
    let r9 = pack();

    return [r1, r2, r3, r4, r5, r6, r7, r8, r9];
    
    function add([x, y]){
        return x + y;
    }

    function move({x = 0, y = 3} = {}) {
        return x + y;
    }

    function pack({x, y} = {x: 5, y: 7}) {
        return x + y;
    }

}