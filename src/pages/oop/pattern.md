## 构造函数的继承

让一个构造函数继承另一个构造函数，可以分两步实现，一是在子构造函数中调用父构造函数，二是让子类的原型指向父类的原型。例如，想要让子类Sub继承父类Super：

```
function Sub(value) {
  Super.call(this);
  this[propName] = value;
}

Super.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype[methodName] = ...
```

## 模块

* 将模块写成一个对象，所有模块成员都放在这个对象中。
* 使用立即执行函数将相关属性方法封装在一个作用域中，达到不暴露私有成员的目的。
* 独立性是模块的重要特点，必须显式地将其他变量输入模块。

## prototype

由于不同的示例的方法是相同的，然而在构造函数中定义方法每次都会生成新的方法，导致对系统资源的浪费。

js的每一个对象都继承自另一个被称为“原型”的对象，原型对象上的所有属性和方法可以被派生对象共享。每个构造函数都有一个prototype属性，这个属性就是实例对象的原型对象。只要修改原型对象，变动就会立即体现在所有实例对象上。

对象的属性和方法，有可能定义在自身，也可能定义在原型对象，原型本身也是对象，有自己的原型，所以形成了一条原型链，如果一层层上溯，都可以上溯到Object.prototype，而这个对象的原型就是null对象，由于null没有自己的原型，原型链到此为止。

所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。

prototype对象有一个constructor属性，指向prototype对象所在的构造函数。由于定义在prototype上面，意味着可以被所有实例对象继承。该属性的作用，是分辨源性对象到底属于哪个构造函数，也可以从实例中新建另一个实例。这也提供了继承模式的一种实现。

## Object相关静态方法

* **getPrototypeOf** 返回一个对象的原型。
* **setPrototypeOf** 给现有的对象设置一个原型，返回一个对象。
* **create** 从原型对象生成新的实例对象，可以替代new命令。

## Object相关实例方法属性

* **isPrototypeof** 判断一个对象是否是另一个的原型。
* **__proto__** 可以改变某个对象的原型对象。然而是内部属性，应该尽量使用getPrototypeOf，setPrototypeOf。

则获取实例对象obj原型对象的方法有三种：

* obj.__proto__
* obj.constructor.prototype
* Object.getPrototypeOf(obj)

三种方法之中，前两种都不是很可靠。最新的ES6标准规定，__proto__属性只有浏览器才需要部署，其他环境可以不部署。而obj.constructor.prototype在手动改变原型对象时，可能会失效。
