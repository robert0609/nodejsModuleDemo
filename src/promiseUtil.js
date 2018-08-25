/**
 * Promise demo
 */

export function test1() {
  let pro1 = new myPromise((resolve, reject) => {
    console.log('start wash');
    setTimeout(() => {
      console.log('finish wash');
      resolve('clean clothes!!');
    }, 1000);
  });

  pro1.then((arg) => {
    return new myPromise((resolve, reject) => {
      console.log('start hang');
      setTimeout(() => {
        console.log('finish hang: ' + arg);
        resolve('hanged clothes!!');
      }, 1000);
    });
  }).then((arg) => {
    return new myPromise((resolve, reject) => {
      console.log('start dry');
      setTimeout(() => {
        console.log('finish dry: ' + arg);
        resolve('dried clothes!!');
      }, 1000);
    });
  }).then((arg) => {
    return new myPromise((resolve, reject) => {
      console.log('start pick');
      setTimeout(() => {
        console.log('finish pick: ' + arg);
        resolve('picked clothes!!');
      }, 1000);
    });
  }).then((arg) => {
    console.log(arg);
  });
}

export function test2() {
  let pro1 = new myPromise((resolve, reject) => {
    console.log('start wash');
    setTimeout(() => {
      //console.log('finish wash');
      resolve('clean clothes!!');
    }, 1000);
  });
  let pro2 = new myPromise((resolve, reject) => {
    console.log('start hang');
    setTimeout(() => {
      //console.log('finish hang: ');
      resolve(pro1);
    }, 1000);
  });
  let pro3 = new myPromise((resolve, reject) => {
    console.log('start dry');
    setTimeout(() => {
      //console.log('finish dry: ');
      resolve(pro2);
    }, 1000);
  });
  let pro4 = new myPromise((resolve, reject) => {
    console.log('start pick');
    setTimeout(() => {
      //console.log('finish pick: ');
      resolve(pro3);
    }, 1000);
  });

  pro4.then((arg) => {
    console.log(arg);
  });
}

/**
 * Promise内部处理抛出异常的情况
 */
export function test3() {
  let p1 = new myPromise((resolve, reject) => {
    throw new Error('Promise inner error');
  });
  p1.then((result) => {
    console.log('result: ' + result);
  }, (error) => {
    console.log('then reject error: ' + error);
  }).catch((error) => {
    console.log('catch error: ' + error);
  });
}
/**
 * then的resolve中抛出异常的情况，并且传递了then的reject回调
 */
export function test4() {
  let p1 = new myPromise((resolve, reject) => {
    resolve('successful result');
  });
  p1.then((result) => {
    console.log('result: ' + result);
    throw new Error('then resolve error!');
  }, (error) => {
    console.log('then reject error: ' + error);
  }).catch((error) => {
    console.log('catch error: ' + error);
  });
}
/**
 * then的resolve中抛出异常的情况，并且没有传递then的reject回调
 */
export function test5() {
  let p1 = new myPromise((resolve, reject) => {
    resolve('successful result');
  });
  p1.then((result) => {
    console.log('result: ' + result);
    throw new Error('then resolve error!');
  }).catch((error) => {
    console.log('catch error: ' + error);
  });
}
/**
 * then的reject回调抛出异常的情况
 */
export function test6() {
  let p1 = new myPromise((resolve, reject) => {
    throw new Error('Promise inner error');
  });
  p1.then((result) => {
    console.log('result: ' + result);
  }, (error) => {
    console.log('then reject error: ' + error);
    throw new Error('then reject error!');
  }).catch((error) => {
    console.log('catch error: ' + error);
  });
}
/**
 * then的reject回调没有抛出异常的情况
 */
export function test7() {
  let p1 = new myPromise((resolve, reject) => {
    throw new Error('Promise inner error');
  });
  p1.then((result) => {
    console.log('result: ' + result);
  }, (error) => {
    console.log('catch1 error: ' + error);
    return 'catch result';
  }).then((result) => {
    console.log('result1: ' + result);
  }, (error) => {
    console.log('catch2 error: ' + error);
  });
}
/**
 * 没有绑定then或者catch的情况
 */
export function test8() {
  let p1 = new myPromise((resolve, reject) => {
    resolve('sss');
    throw new Error('Promise inner error');
  });
}

/**
 * 先catch再then的情况
 *
 * @export
 */
export function test9() {
  let p1 = new myPromise((resolve, reject) => {
    throw new Error('Promise inner error');
  });
  p1.catch(error => {
    console.log(error.message);
    return 'catch result';
  }).then(result => {
    console.log(result);
  });
}

/**
 * 既没有调用resolve也没有调用reject的情况
 */
export function test10() {
  let p1 = new myPromise((resolve, reject) => {
    console.log('running!');
  });
  p1.then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error.message);
  });
}



export function myPromise(fn) {
  let state = 'pending';

  let currentResolveHandler = null;
  let value = null;
  let next_resolve = null;

  let currentRejectHandler = null;
  let error = null;
  let next_reject = null;

  try {
    fn(resolve, reject);
  }
  catch (e) {
    //console.log('****reject: ' + e);
    if (state === 'pending') {
      reject(e);
    }
  }

  function resolve(_return_value) {
    setState('fulfilled', _return_value);
  }

  function reject(_return_error) {
    setState('rejected', _return_error);
  }

  function setState(stateValue, returnResult) {
    if (returnResult && (typeof returnResult == 'object' || typeof returnResult == 'function')) {
      if (returnResult.then && typeof returnResult.then == 'function') {
        returnResult.then(resolve, reject);
        return;
      }
    }
    state = stateValue;
    if (state === 'fulfilled') {
      value = returnResult;
    }
    else {
      error = returnResult;
    }
    process.nextTick(() => {
      handle(currentResolveHandler, currentRejectHandler);
    });
  }

  //执行then方法时，将传入的方法加入missions，等待resolve触发。
  this.then = function (resolveHandler, rejectHandler) {
    var fn = function (resolve, reject) {
      process.nextTick(() => {
        next_resolve = resolve;
        next_reject = reject;
        if (state === 'pending') {
          currentResolveHandler = resolveHandler;
          currentRejectHandler = rejectHandler;
        } else {
          handle(resolveHandler, rejectHandler);
        }
      });
    };
    return new myPromise(fn);
  };

  this.catch = function (rejectHandler) {
    return this.then(null, rejectHandler);
  };

  function handle(resolveHandler, rejectHandler) {
    try {
      let result = null;
      if (state === 'fulfilled') {
        if (resolveHandler) {
          result = resolveHandler(value);
        }
      }
      else {
        if (rejectHandler) {
          result = rejectHandler(error);
        }
      }
      //当处理结果为Promise对象时，将next_resolve推入待执行队列
      if (result && (typeof result == 'object' || typeof result == 'function')) {
        if (result.then && typeof result.then == 'function') {
          result.then(next_resolve, next_reject);
        }
      } else {
        if (next_resolve) {
          next_resolve(result);
        }
      }
    }
    catch (e) {
      //console.log('****' + e);
      if (next_reject) {
        next_reject(e);
      }
    }
  }
}
