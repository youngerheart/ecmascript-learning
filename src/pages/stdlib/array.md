Array是js的内置对象，同时也是一个用于生成数组的构造函数，单参数为正整数时表示数组长度，其他类型时表示新数组成员，多参数时均表示新数组成员。

```
var arr = new Array(2);
arr.length // 2
arr // [, ,]

new Array('abc') // ['abc']
new Array(1, 2) // [1, 2]
```

由于其行为太鬼畜，使用数组字面量生成新数组是更好的办法。

Array的静态方法isArray用于判断一个值是否为数组。可以弥补typeof运算符的不足。

## Array的实例方法

* **valueOf** 返回数组本身
* **toString** 返回数组的字符串形式
* **push** **pop** **shift** **unshift**
* **join** **concat** **reverse**（颠倒元素顺序）**slice** **splice()**
* **sort** 按照对应字符串的字典顺序。如果传入函数，其参数为做比较的两个元素，其返回值大于零则第一个排在第二个后面，否则均为相反。
* **map** **forEach** **filter** **some** **every**
* **reduce** **reduceRight** 从左到右或从右到左依次处理每一个数组成员，最终累计为一个值，其参数为一个函数，该函数有四个参数：

1. 累积变量，默认为数组的第一个成员
2. 当前变量，默认为数组的第二个成员
3. 当前位置（从0开始）
4. 原数组

* **indexOf** **lastIndexOf**（该元素最后一次出现的位置）
