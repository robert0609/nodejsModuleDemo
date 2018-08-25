//CommonJS Module
var counter = 3;
setTimeout(function () {
    counter = 10;
}, 1000);

exports.counter = counter;