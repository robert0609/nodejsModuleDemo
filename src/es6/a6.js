//ES6 Module
let counter = 3;
setTimeout(function () {
    counter = 10;
}, 1000);

//更新的全局属性global.x在外部也可以访问到
global.x = 98;

//export default counter;
export { counter }; 

// let foo = {bar:'my-default'};
// export { foo };
// foo = null;

//export default 输出的接口有缓存，跟一般的export的接口不一样