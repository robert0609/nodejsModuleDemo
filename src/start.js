import * as gu from '../src/generatorUtil';
import * as pro from './promiseUtil';
import { OldWang } from './childClassUtil';
// gu.chat1('hello');

// pro.test10();
let wang = new OldWang('隔壁老王', '男');

console.log(wang);
wang.talk();
wang.eat('bread');
wang.run();