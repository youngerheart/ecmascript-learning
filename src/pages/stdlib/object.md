js原生提供一个Object对象，所有其他对象都继承自这个对象。Object本身也是一个构造函数，用于生成新对象。其作为构造函数时，可以接收一个参数，如果该参数是一个对象，则直接返回这个对象，如果是一个原始类型的值，则返回该值对应的包装对象的实例。

```
new Object(123) instanceof Number // true
```

## Object

`Object`本身当工具方法使用时，可以将任意值转为对象。这个方法常用于保证某个值一定是对象。如果参数是原始类型的值则返回其包装对象的示例。

（在尝试对基本类型变量调用方法时，js引擎会调用其构造函数临时将基本类型转为对象并调用方法）

```
Object(undefined) // {}
Object(null) // {}
Object(1) // Number {...}
```

## Object的静态方法

**keys与getOwnPropertyNames**

都用于遍历对象的属性，后者可以返回不可枚举的属性名，如数组的length属性。

* **getOwnPropertyDescriptor** 获取某个属性的attributes对象
* **defineProperty与defineProperties** 定义一个或多个属性
* **getOwnPropertyNames** 返回直接定义在某个对象上面全部属性的名称
* **getPrototypeOf** 返回指定对象的原型

* **preventExtensions** 防止对象拓展（使用defineProperty抛出异常，直接添加属性会失效，且原型不可更改）
* **isExtensible** 判断对象是否可拓展
* **seal** 禁止对象配置（同上，同时不可删除属性）
* **isSealed** 判断对象是否可配置
* **freeze** 冻结一个对象（同上，同时不能修改已有属性值）
* **isFrozen** 判断对象是否冻结

## Object对象的实例方法

* **valueOf** 返回当前对象对应值
* **toString** 返回当前对象对应字符串形式
* **toLocaleString** 返回当前对象对应的本地字符串形式（作用于Array，Number，Date）
* **hasOwnProperty** 判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
* **isPrototypeOf** 判断当前对象是否为另一个对象的原型。
* **propertyIsEnumerable** 判断某个属性是否可枚举。
