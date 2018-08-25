/**
 * 数组扩展 demo test case
 */
import * as ar from '../src/arrayUtil';
import chai from 'chai';

let expect = chai.expect;

describe('数组扩展测试', function () {
    it('Array.from', function () {
        let arrayLike = {
            '0': 'a',
            '2': true,
            length: 5
        };
        let a = ar.gernerateArray(arrayLike);
        expect(a).to.be.instanceof(Array);
        expect(a[0]).to.equal('a');
        expect(a[1]).to.be.undefined;
        expect(a[2]).to.be.true;
        expect(a[3]).to.be.undefined;
        expect(a[4]).to.be.undefined;

    });
});