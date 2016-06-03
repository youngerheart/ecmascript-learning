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
  var f1 = yield readFileTrunk('/etc/1');
  var f2 = yield readFileTrunk('/etc/2');
};

var a = gen();

// 手动执行
var r1 = a.next();
r1.value(function(err, data){
  if (err) throw err;
  var r2 = a.next(data);
  r2.value(function(err, data){
    if (err) throw err;
    a.next(data);
  });
});

// 自动执行
var next = (err, data) => {
  if (err) throw err;
  r1 = a.next(data);
  if (result.done) return;
  result.value(next);
}
