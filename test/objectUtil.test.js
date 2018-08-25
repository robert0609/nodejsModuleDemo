/**
 * 对象扩展 demo test case
 */
import * as ou from '../src/objectUtil';
import chai from 'chai';

let expect = chai.expect;

describe('对象扩展测试', function () {
    it('Object.is()', function () {
        let [a, b] = ou.checkValueEqual('foo', 'foo');
        expect(a).to.be.true;
        expect(b).to.be.true;

        [a, b] = ou.checkValueEqual({name: 'a'}, {name: 'a'});
        expect(a).to.be.false;
        expect(b).to.be.false;
        
        [a, b] = ou.checkValueEqual(+0, -0);
        expect(a).to.be.true;
        expect(b).to.be.false;
        
        [a, b] = ou.checkValueEqual(NaN, NaN);
        expect(a).to.be.false;
        expect(b).to.be.true;
    });

    it('Object.assign()', function () {
        let sources = [
            { a: 'abc', b: true, c: 89 },
            { 'name': 'li four', [Symbol.for('Car brand')]: 'evoque' }
        ];

        let o = ou.assignObject(...sources);
        
        expect(o).to.be.instanceof(Object);
        expect(o).to.have.property('a', 'abc');
        expect(o).to.have.property('b', true);
        expect(o).to.have.property('c', 89);
        expect(o).to.have.property('name', 'zhang three');
        expect(o).to.have.property('sex', 1);
        expect(o).to.have.property(Symbol.for('Car brand'), 'lexus');
        expect(o).to.have.property('info');
        expect(o.info).to.be.instanceof(Object);
        expect(o.info).to.have.property('description', 'very beautiful!');

    });

    // it('扩展运算符', function () {
    //     let {x, y, z, w} = ou.expandOperator();
    //     expect(x).to.equal(1);
    //     expect(y).to.equal(2);
    //     expect(z).to.be.instanceof(Object);
    //     expect(z).to.have.property('a', 3);
    //     expect(z).to.have.property('b', 4);
    //     expect(w).to.be.instanceof(Object);
    //     expect(w).to.have.property('a', 3);
    //     expect(w).to.have.property('b', 4);
    // });
});