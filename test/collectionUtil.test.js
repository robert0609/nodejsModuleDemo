/**
 * 集合扩展 demo test case
 */
import * as coll from '../src/collectionUtil';
import chai from 'chai';

let expect = chai.expect;

describe('集合扩展测试', function () {
    it('自定义Set', function () {
        let { length, keys, values, entries } = coll.customSet();
        expect(length).to.equal(4);
        expect(keys).to.be.instanceof(Array);
        expect(keys.toString()).to.be.equal('aaa,bbb,ccc,ddd');
        expect(values).to.be.instanceof(Array);
        expect(values.toString()).to.be.equal('aaa,bbb,ccc,ddd');
        expect(entries).to.be.instanceof(Array);
        expect(entries.toString()).to.be.equal('aaa,aaa,bbb,bbb,ccc,ccc,ddd,ddd');
    });

    it('自定义Map', function () {
        let map = coll.customMap();
        expect(map.size).to.be.equal(3);
        const entries = map.entries();
        let kvp = entries.next().value;
        expect(kvp[0]).to.be.instanceof(Object);
        expect(kvp[0]).to.have.property('sex', 'male');
        expect(kvp[1]).to.be.equal(1);

        kvp = entries.next().value;
        expect(kvp[0]).to.be.instanceof(Object);
        expect(kvp[0]).to.have.property('name', 'haha');
        expect(kvp[1]).to.be.equal('zhang three');

        kvp = entries.next().value;
        expect(kvp[0]).to.be.instanceof(Object);
        expect(kvp[0]).to.have.property('name', 'haha');
        expect(kvp[1]).to.be.equal('li four');
    });
});