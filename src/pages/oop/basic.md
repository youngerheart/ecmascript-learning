## 对象的概念

“面向对象编程”（Object Oriented Programming）

* “对象”是单个实物的抽象
* “对象”是一个容器，封装了“属性”和“方法”

## 构造函数

js的对象体系基于构造函数和原型链，所谓“构造函数”是专门用来生成对象的函数，其提供模板描述对象的基本结构。为了与普通函数区别，函数名的第一个字母通常大写。其内部使用this关键字，代表要生成的对象实例，生成对象的时候需要用new命令调用函数。

## new 命令

其作用是执行构造函数，返回一个对象实例，构造函数内部的this就代表新生成的实例对象。
如果在调用构造函数时忘记加上new命令则其this将代表全局对象。可以在函数内部通过instanceof判断是否使用new命令。

使用new命令时会依次执行下面的步骤：

* 创建一个空对象，作为要返回的对象实例。
* 将其原型指向构造函数的prototype属性。
* 将这个空对象赋值给函数内部的this关键字。
* 执行构造函数内部的代码。

如果构造函数中return一个对象，则new命令会返回return指定的对象，否则返回this对象。return基本类型则会返回this。

new命令的内部流程大致如下。

```
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ param1) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}
```
