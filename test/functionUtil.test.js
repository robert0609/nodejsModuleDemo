/**
 * 函数扩展 demo test case
 */
import * as fn from '../src/functionUtil';
import chai from 'chai';

let expect = chai.expect;

describe('函数扩展测试', function () {
    it('参数默认值', function () {
        let [a, b] = fn.defaultParameter();
        expect(a).to.equal(100);
        expect(b).to.equal(101);
    });

    it('扩展运算符', function () {
        let [a, b] = fn.expandOperator();
        expect(a).to.equal(4);
        expect(b).to.equal(3);
    });

    it('箭头函数', function () {
        let afn = fn.generateArrowFunction.call({
            id: 'Three Zhang'
        });
        let a = afn();
        expect(a).to.equal('Three Zhang');
    });
});