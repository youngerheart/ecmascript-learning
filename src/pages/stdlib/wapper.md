js有“万物皆对象”之说，数组和函数本质上也是对象，连三种原始类型的值--数值，字符串，布尔值--在一定条件下也会自动转为对象，也就是原始类型的“包装对象”。
所谓“包装对象”，就是分别与数值，字符串，布尔值对应的`Number`，`String`，`Boolean`三个原生对象，可以把原始类型的值包装为对象。

包装对象使得js的“对象”涵盖所有值，也使得原始类型的值可以方便的调用指定方法。

三个对象若不作为构造函数，可以直接调用，将任意类型的值转化为该原始类型。

## 包装对象实例的方法

* **valueOf** 返回包装对象实例对应的原始类型的值。
* **toString()** 返回对应的字符串形式

## 原始类型自动转换

原始类型的值可以自动当做对象调用，js引擎会自动将原始类型的值转为包装对象，在使用后立即销毁。该对象的内部属性[[PrimitiveValue]]保存字符串的原始值，仅供其方法内部调用。该对象是只读的，无法直接给其添加新属性，只能在XX.prototype上定义。

```
'abc'.charAt === String.prototype.charAt; // true
```