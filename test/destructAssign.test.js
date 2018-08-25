/**
 * 解构赋值demo test case
 */
import * as da from '../src/destructAssign';
import chai from 'chai';

let expect = chai.expect;

describe('解构赋值的测试', function () {
    it('数据解构赋值', function () {
        let [a, b, c, d, e] = da.destructingArray();
        expect(a).to.be.equal(0);
        expect(b).to.be.equal(null);
        expect(c).to.be.equal(3);
        expect(d).to.be.ok;
        expect(e).to.be.empty;
    });

    it('对象解构赋值', function () {
        let [a, b, c, d, e] = da.destructingObject();
        expect(a).to.be.equal('property1');
        expect(b).to.be.equal(98);
        expect(c).to.be.ok;
        expect(d).to.be.equal('hello');
        expect(e).to.be.equal('world');
    });

    it('字符串解构赋值', function () {
        let [a, b, c, d, e] = da.destructingString();
        expect(a).to.be.equal('h');
        expect(b).to.be.equal('e');
        expect(c).to.be.equal('l');
        expect(d).to.be.equal('l');
        expect(e).to.be.equal('o');
    });

    it('数值和布尔解构赋值', function () {
        let [a, b] = da.destructingBoolAndNumber();
        expect(a).to.be.equal(Number.prototype.toString);
        expect(b).to.be.equal(Boolean.prototype.toString);
    });

    it('函数参数解构赋值', function () {
        let [r1, r2, r3, r4, r5, r6, r7, r8, r9] = da.destructingFunctionParameter();
        expect(r1).to.be.equal(3);
        expect(r2).to.be.equal(11);
        expect(r3).to.be.equal(7);
        expect(r4).to.be.equal(3);
        expect(r5).to.be.equal(3);
        expect(r6).to.be.equal(11);
        expect(r7).to.be.NaN;
        expect(r8).to.be.NaN;
        expect(r9).to.be.equal(12);
    });
});