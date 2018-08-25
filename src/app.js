var a = require('./es6/a6');
console.log('require ES6 Module: ' + a.counter);
setTimeout(function () {
    console.log('require ES6 Module 2s later: ' + a.counter);
}, 2000);

import b from './commonjs/a';
console.log('import CommonJS Module: ' + b.counter);
setTimeout(function () {
    console.log('import CommonJS Module 2s later: ' + b.counter);
}, 2000);

