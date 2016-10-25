## 含义

this总返回一个对象，即返回属性或方法“当前”所在的对象。由于对象的属性可以赋值给另一个对象，则this的指向是可变的。

```
function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

A.describe() // "姓名：张三"
B.describe() // "姓名：李四"
```

* 如果一个函数在全局环境中运行，那么this就是指顶层对象。
* 在构造函数中this即指实例对象。
* 在对象中的方法的this指向该对象。

然而如果不是直接在对象上执行方法，而是首先取出方法再执行，则this会指向上层对象。

```
// 情况一
(obj.foo = obj.foo)() // window

// 情况二
(false || obj.foo)() // window

// 情况三
(1, obj.foo)() // window
```

此时至少需要保留方法上层的对象来调用这个方法，this的指向就不会变。

在浏览器中的顶级对象是window，node中是global，模块环境中this指向module.exports。

由于this的指向是不确定的，所以切勿在函数中包含多层的this，或在forEach中以及回调函数中使用this。

```
var o = {
  f1: function () {
    console.log(this);
    var f2 = function () {
      console.log(this);
    }();
  }
}

o.f1()
// Object
// Window f2执行时this指向全局（并不是其他对象的方法）
```

## 绑定this方法

* func.call(that, arg1, arg2...);
* func.apply(that, [arg1, arg2...]);

利用apply可以做很多事：

```
Math.max.apply(null, numArr); // 找出最大值
Array.prototype.slice.apply(arrayLikeObj); // 将类数组对象转换为数组
Object.prototype.toString.apply(unknownArg).slice(8, -1); // 得出变量真实类型
```

* func.bind(that);

用于将函数体内的this绑定到某个对象，然后返回一个新函数。

