/**
 * Generator函数 demo
 */
import 'babel-polyfill';
import http from 'http';
import query from 'querystring';
import co from 'co';

/**
 * 使用Generator遍历自定义容器
 */
export let container = {
    [1]: 'a',
    [2]: 'b',
    [3]: 'c',
    [4]: 'd'
};

container[Symbol.iterator] = function* () {
    for (let i = 1; i < 5; ++i) {
        yield container[i];
    }
    return true;
};

/**
 * 对任意的对象包装一个keys的遍历器
 */
export function generateKeysIteratorOfObject(o) {
    o[Symbol.iterator] = function* () {
        let keys = Object.keys(o);
        for (let k of keys) {
            yield k;
        }
        yield* numberList();
    };
}

function* numberList() {
    for (let i = 0; i < 5; ++i) {
        yield i;
    }
}

/**
 * mock异步方法
 */
function asyncResponse(msg, callback) {
    // //构造querystring
    // let queryString = query.stringify({
    //     msg
    // });
    // //发起Http请求数据
    // let options = {
    //     hostname: '127.0.0.1',
    //     port: 5000,
    //     path: '/node/gettalk/?' + queryString,
    //     method: 'GET'
    // };
    // http.get(options, (res) => {
    //     const statusCode = res.statusCode;
    //     const contentType = res.headers['content-type'];
    //     res.setEncoding('utf8');
    //     let rawData = '';
    //     res.on('data', (chunk) => {
    //         rawData += chunk;
    //     });
    //     res.on('end', () => {
    //         let formatData = JSON.parse(rawData);
    //         console.log(formatData);
    //         callback(formatData.responseMessage);
    //     });
    // });

    
    setTimeout(function () {
        let result = '';
        switch (msg) {
            case 'hello':
                result = 'how are you';
                break;
            case 'how are you':
                result = 'I am fine';
                break;
            case 'I am fine':
                result = 'Me too';
                break;
            default:
                result = 'bye bye';
                break;
        }
        callback(result);
    }, 1000);
}

/**
 * Thunk函数转换器
 */
function convertThunk(originalFunction) {
    return function (...args) {
        // 返回Thunk函数
        return function (callback) {
            return originalFunction.call(this, ...args, callback);
        };
    };
}

/**
 * Generator自动执行器，基于Thunk函数
 */
function run(generatorIterator) {
    thunkNext();

    function thunkNext(result) {
        let loop = generatorIterator.next(result);
        if (loop.done) {
            return;
        }
        loop.value(thunkNext);
    }
}

/**
 * 使用Generator实现异步操作，基于Thunk函数
 */
export function chat(msg) {
    run(gen(msg));

    function* gen(msg) {
        let asyncResponseThunk = convertThunk(asyncResponse);
        console.log(msg);
        let val1 = yield asyncResponseThunk(msg);
        console.log(val1);
        let val2 = yield asyncResponseThunk(val1);
        console.log(val2);
        let val3 = yield asyncResponseThunk(val2);
        console.log(val3);
        let val4 = yield asyncResponseThunk(val3);
        console.log(val4);
    }
}

/**
 * Promise包装器
 */
function convertPromise(originalFunction) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            originalFunction.call(this, ...args, resolve);
        });
    }
}

/**
 * 使用Generator实现异步操作，基于co模块
 */
export function chat1(msg) {
    debugger;
    co(gen(msg)).then((o) => {
        console.log('finished');
    });

    function* gen(msg) {
        let asyncResponsePromise = convertPromise(asyncResponse);
        console.log(msg);
        let val1 = yield asyncResponsePromise(msg);
        console.log(val1);
        let val2 = yield asyncResponsePromise(val1);
        console.log(val2);
        let val3 = yield asyncResponsePromise(val2);
        console.log(val3);
        let val4 = yield asyncResponsePromise(val3);
        console.log(val4);
    }
}