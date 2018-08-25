/**
 * Generator函数 demo test case
 */
import * as gu from '../src/generatorUtil';
import chai from 'chai';

const expect = chai.expect;

describe('Generator函数测试', function () {
    it('遍历自定义容器', function () {
        let arr = Array.from(gu.container);
        expect(arr).to.be.instanceof(Array);
        expect(arr.length).to.equal(4);
        expect(arr.toString()).to.equal('a,b,c,d');
    });

    it('任意对象keys的遍历器', function () {
        let instance = {
            'stringKey': 'abc',
            [45]: true
        };
        gu.generateKeysIteratorOfObject(instance);

        let arr = Array.from(instance)
        expect(arr).to.be.instanceof(Array);
        expect(arr.length).to.equal(7);
        expect(arr.toString()).to.equal('45,stringKey,0,1,2,3,4');
    });

    it('Generator异步操作', function () {
        gu.chat1('hello');
    });
});