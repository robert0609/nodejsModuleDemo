/**
 * 字符串接口demo test case
 */
import * as stringUtil from '../src/stringUtil';
import chai from 'chai';

let expect = chai.expect;

describe('字符串接口测试', function () {
    it('CodePoint相关', function () {
        let [a, b, c] = stringUtil.stringCodePoint();
        expect(a).to.be.equal('20bb7');
        expect(b).to.be.equal('61');
        expect(c).to.be.equal('\u{20BB7}a');
    });

    it('一些新接口', function () {
        let [a, b, c, d] = stringUtil.stringTransform();
        expect(a).to.be.true;
        expect(b).to.be.true;
        expect(c).to.be.true;
        expect(d).to.be.equal('this is a pen!this is a pen!');
    });

    it('模板字符串', function () {
        let a = stringUtil.templateString({
            name: '张三',
            where() {
                return '桌子上';
            }
        });

        expect(a).to.be.equal(`<div>
        张三的书包在桌子上
    </div>`);
    });
});