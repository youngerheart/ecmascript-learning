// JavaScript 对于函数参数是传值调用而不是传名调用，它的Thunk含义有所不同。
// 其替换的不是表达式，而是多函数的参数

import readFile from 'fs';

const Thunk = (func) => {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    return function(callback) {
      args.push(callback);
      return func.apply(this, args);
    }
  }
};

var readFileTrunk = Thunk(readFile);

// 此时，Thunk 函数可以用于 Genetator 函数的自动流程管理

var gen = function*() {
  yield readFileTrunk('/etc/1');
  yield readFileTrunk('/etc/2');
};

var a = gen();

var walk = () => {
  // 调用遍历器的next 方法以返回 yield 后的内容
  var b = a.next();
  b.value((err, data) => {
    if (err) throw err;
    if (b.done) return;
    walk();
  });
}

walk();
