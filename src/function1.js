// es2015: 允许为函数参数设置默认值

function Point(x = 0, y=0) {
  this.x = x;
  this.y = y;
}

console.log(new Point());

// 允许函数参数默认值解构赋值
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}); // undefined, 5
foo({x: 1}); // 1, 5
foo({x: 1, y: 2}); // 1, 2

// 双重默认值

function fetch(url, { method = 'GET' } = {}) {
  console.log(method);
}

fetch('http://example.com');

// 指定默认值后，函数的length属性将返回没有指定默认值的参数个数
// length属性的含义是，该函数预期传入的参数个数。
console.log((function (a, b, c = 5) {}).length); // 2
console.log((function(...args) {}).length) // 0
console.log((function (a, b = 1, c) {}).length); // 1

// 函数参数默认值的作用域与其他函数变量规则相同

var x = 1;

function f(x, y = x) {
  console.log(y);
}

f(2) // 2

let x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // 1， 在赋值时作用域内的x还没有生成。全局变量x不存在，就会报错。

let foo = 'outer';

function bar(func = x => foo) {// 此时使用了外层作用域
  let foo = 'inner';
  console.log(func()); // outer
}

bar();

// 箭头函数
// 函数体内的this对象就是定义时所在的对象
// 不可当做构造函数 不可使用new命令 没有arguments对象 不可以使用 yield 命令

function foo() {
  setTimeout(() => {// 定义时this为{ id: 42 }
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 }); // id: 42
