// Reflect 对象提供了若干个能对任意对象进行某种特定的可拦截操作（interceptable operation）的方法。
// 和其他大多数全局对象不同的是，Reflect 并不是一个构造函数，你不需要使用 new 运算符来构造它的实例。所有方法都是它的静态方法（就和 Math 对象身上的一样）。
// Reflect.enumerate() 代替 for...in, 枚举包括继承的所有属性名
// 浏览器并未支持, node已经支持

function Animal() {
  this.eat = 'food'
};

function Cat() {
  this.hair = 'red'
};

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

var cat = new Cat();

for (var name of Reflect.enumerate(cat)) {
  console.log(name);
}

// Object.create() 深拷贝一个对象(对于简化继承之类并没什么卵用)
// Object.assign() es2015, 并未被chrome, firefox之外的浏览器支持
var a1 = Object.create({a: 1, b: 2});
var a2 = Object.assign({a: 1, b: 2});

for (var name of Reflect.enumerate(a1)) {
  console.log(name);
}

// 创建一个合并属性的新对象
var user = {name: 'younger', age: 23};
// es2016, 并未被node支持
var info = {...user, coding: true};
console.log(info);
