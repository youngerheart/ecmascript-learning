Number是js的内置数组对应包装对象，同时也是构造函数与工具函数。

作为构造函数时，返回Number包装函数的实例，作为工具函数时，将任何类型的值转换为数值。

```
new Number(1); // Number {...}
Number(true); // 1
```

## Number对象的静态属性

* **POSITIVE_INFINITY** 正无限，等于Infinity。
* **NEGATIVE_INFINITY** 负无限，等于-Infinity。
* **NaN** 表示非数值，指向NaN（然而NaN不等于任何值，需要使用isNaN函数）。
* **MAX_VALUE** 表示最大的正数，等于1.7976931348623157e+308。
* **MIN_VALUE** 最小的正数，等于5e-324。
* **MAX_SAFE_INTEGER** 最大的能精确表示的正整数，等于9007199254740991。
* **MIN_SAFE_INTEGER** 最小的能精确表示的正整数，等于-9007199254740991。

## Number对象实例的方法

* **toString** 将一个数值转换为字符串形式。
* **toFixed** 将一个数转换为指定位数的小数，返回这个小数对应的字符串。
* **toExponential** 将一个数转换为科学计数法形式。
* **toPrecision** 将一个数转换为指定位数的有效数字。
