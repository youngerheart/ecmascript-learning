String用于生成String包装函数的实例。该实例

```
var a = new String('abc'); // String {...}
a.valueOf(); // 'abc'
```

String.fromCharCode()

该静态方法返回一系列Unicode码点对应的字符串

String.fromCharCode(104, 101, 108, 108, 111); // hello

## 实例的属性和方法

* **length** 返回数组长度
* **charAt** 返回指定位置的字符（完全可以用数组下标替代）
* **charCodeAt** 返回指定位置字符的Unicode码点。
* **concat** **slice**
* **subString** 与slice作用相同
* **substr** 第一个参数为开始为主，第二个参数为字符串长度。
* **indexOf** **lastIndexOf** **trim** **toLowerCase** **toUpperCase**
* **localeCompare** 通过Unicode码点比较两个字符串，小于零则第一个大于第二个，等于则相等，大于则第一个小于第二个。
* **match** 用于确定原字符串是否匹配某个字符串，返回匹配的第一个字符串的数组，如果没有找到匹配，返回null。
* **search** 用法等同与match，返回值为匹配的第一个位置，如果没有匹配返回-1。
* **replace** **split**
