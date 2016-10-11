js提供了一个用于描述，控制一个对象的属性的数据结构，被称为“属性描述对象”。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息，该对象有6个元属性：

#### value
存放该属性的属性值，默认为`undefined`。

#### writable
存放一个表示属性值是否可变的布尔值，默认为`true`。

#### enumerable
存放一个表示属性是否可枚举的布尔值，默认为`true`，为false时使得遍历语句跳过该属性（in, for...in, Object.keys, JSON.stringify），因此，可以用来设置相对秘密的属性。

#### configurable
存放一个表示属性是否“可配置”的布尔值，默认为`true`。如果设为`false`则无法删除该属性也不得改变该属性描述对象，即元属性的值都不能修改了（对于value，只要writable和configurable有一个为true，就允许修改）。

**存取器** 提供的是虚拟属性，为每次读取时计算生成。

* **get** **set**
分别表示取值函数和存值函数。

## Object相关静态方法

* **getOwnPropertyDescriptor** 读出一个对象自身某个属性的描述对象。
* **getOwnPropertyNames** 返回直接定义在某对象上的全部属性名称，不管该属性是否可枚举。
* **propertyIsEnumerable**  判断该属性是否可枚举
* **defineProperty** **defineProperties** 通过定义属性描述对象来定义或修改某对象属性。

```
var o = Object.defineProperties({}, {
  p1: {...},
  p2: {...}
});
```

## 对象的拷贝

对于简单属性，就直接拷贝，对于那些通过属性描述对象设置的属性，则使用Object.defineProperty方法拷贝。

```
var extend = function (to, from) {
  for (var property in from) {
    var descriptor = Object.getOwnPropertyDescriptor(from, property);

    if (descriptor && ( !descriptor.writable
      || !descriptor.configurable
      || !descriptor.enumerable
      || descriptor.get
      || descriptor.set)) {
      Object.defineProperty(to, property, descriptor);
    } else {
      to[property] = from[property];
    }
  }
}
```
