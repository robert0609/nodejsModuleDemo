/**
 * class demo
 */
import { Person } from './baseClassUtil';

/**
 * 私有方法名称，使用Symbol变相实现私有目的
 */

/**
 * 子类
 */
export class OldWang extends Person {
    constructor(name, sex) {
        //子类必须在constructor方法中调用super方法
        //ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
        super(name);
        this.sex = sex;
    }

    talk() {
        console.log('wang talk something');
    }
    eat(food) {
        console.log('wang eat ' + food);
    }

    run() {
        console.log(`super.name: ${super.name}`);
        super.talk();
        super.eat('bread');
        console.log(`wang.name: ${this.name}`);
        console.log(`wang.sex: ${this.sex}`);
        this.talk();
        this.eat('bread');
    }
}