var a = require('./commonjs/a');
console.log('require CommonJS Module: ' + a.counter);
setTimeout(function () {
    console.log('require CommonJS Module 2s later: ' + a.counter);
}, 2000);

import { counter } from './es6/a6';
console.log(global.x);
console.log('import ES6 Module: ' + counter);
setTimeout(function () {
    console.log('import ES6 Module 2s later: ' + counter);
}, 2000);
