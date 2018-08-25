/**
 * 数值新接口 demo test case
 */

import * as n from '../src/numberUtil';
import chai from 'chai';

let expect = chai.expect;

describe('数值新接口', function () {
    it('判断整型接口', function () {
        let [a, b, c] = n.checkInteger();
        expect(a).to.be.true;
        expect(b).to.be.true;
        expect(c).to.be.false;
    });
});