/**
 * class demo test case
 */
import { Person, OldWang } from '../src/classUtil';
import chai from 'chai';

const expect = chai.expect;

describe('class扩展测试', function () {
    it('class demo', function () {
        let person = new Person('人');
        console.log(person.name);
        console.log('I said ' + person.talk());
        person.eat('meat');

        let wang = new OldWang('老王', '男');
        console.log(wang.name);
        console.log(wang.sex);
        console.log(wang.age);
    });
});