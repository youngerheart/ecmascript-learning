// 扩展运算符，将一个数组转换为逗号分隔的参数序列
// 其基于Iterator接口实现，只要具有Iterator接口的对象都可以使用拓展运算符

console.log(1, ...[2, 3, 4], 5); // 1 2 3 4 5

// 代替apply方法
function f(x, y, z) {}
var args = [0, 1, 2];
var arr = [0, 1, 2];
f.apply(null, args); // es5
f(...args); // es6

console.log(Math.max(...args));
arr.push(...args);

console.log(arr.concat(args)); // es5
console.log([...arr, ...args]); // es6
console.log(...'hello'); // [ "h", "e", "l", "l", "o" ]

let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]

var go = function*(){
  yield 1;
  yield 2;
  yield 3;
};

[...go()] // [1, 2, 3]
