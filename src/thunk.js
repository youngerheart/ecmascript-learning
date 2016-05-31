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
