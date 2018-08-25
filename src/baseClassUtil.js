/**
 * class demo
 */

/**
 * 私有方法名称，使用Symbol变相实现私有目的
 */
const drink = Symbol('drink');
const privatePropertySet = Symbol('privatePropertySet');

/**
 * 父类
 */
export class Person {
    constructor(name) {
        this.name = name;
        this[privatePropertySet] = {
            loveSex: 0
        };
    }

    // age = 0;

    talk() {
        console.log('parent talk something');
    }
    eat(food) {
        console.log('parent eat ' + food);
        this[drink]();
    }
    [drink]() {
        console.log('parent drink water');
    }
}

