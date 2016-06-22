"use strict";

// 函数绑定: 双冒号运算符
var self = {name: 'younger'}

var bar = function(...args) {
  console.log(this, args);
};

self::bar // 等同于 bar.bind(self)

self::bar(...[1, 2]) // 等同于 bar.apply(self, [1, 2]);

::console.log('younger'); // 等同于 console.log.apply(console, ['younger'])

// 尾调用
// 指在某个函数的最后一步是调用另一个函数
// 由于最后一步一定是return，所以需要在return调用
function g(x) {}
function f(x) {
  return g(x);
}

// 如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。
// 等到B运行结束，将结果返回到A，B的调用帧才会消失。
// 如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。
// 所有的调用帧，就形成一个“调用栈”（call stack）。
// 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧。
// 因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
// 调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。
// 只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”
// 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误
//（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

// 尾递归优化过的计算n的阶乘
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

console.log(factorial(5, 1)); // 120

// 尾递归优化过的 fibonacci 递归算法
function Fibonacci (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac1};

  return Fibonacci (n-1 , ac2 , ac1 + ac2);
}

console.log(Fibonacci(100)) // 354224848179262000000
console.log(Fibonacci(1000)) // 4.346655768693743e+208
// console.log(Fibonacci(10000)) // Maximum call stack size exceeded

// ES6的尾调用优化只在严格模式下开启，正常模式是无效的。
// 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
// func.arguments：返回调用时函数的参数。
// func.caller：返回调用当前函数的那个函数。
// 尾递归之所以需要优化，原因是调用栈太多，造成溢出，
// 那么只要减少调用栈，就不会溢出。怎么做可以减少调用栈呢？就是采用“循环”换掉“递归”。

function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  console.log(f);
  return f;
}

function sum(x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1);
  } else {
    return x;
  }
}

trampoline(sum(1, 100000)); // 100001
