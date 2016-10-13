## Error对象

js解析或执行时，一旦发生错误，引擎会抛出一个错误对象。即js原生`Error`构造函数的实例。之后程序中断，不再继续执行。

其参数表示错误提示，可以从实例的message属性读到这个参数。大多js引擎对Error还有name和stack属性，表示错误的名称和堆栈。

## js的原生错误类型

**SyntaxError** 解析代码时发生错误。

```
// 变量名错误
var 1a;

// 缺少括号
console.log 'hello');
```

**ReferenceError** 引用一个不存在的变量，或不可行的赋值时的错误。

```
console.log() = 1; // ReferenceError: Invalid left-hand side in assignment
```

**RangeError** 一个值超出有效范围时发生的错误

```
var a = [];
a.length = -1; // RangeError: Invalid array length
```

**TypeError** 变量或参数不是预期类型时发生的错误。

```
var obj = {};
obj.unknownMethod(); // TypeError: obj.unknownMethod is not a function
```

**URIError** URI相关函数的参数不正确时抛出的错误，主要涉及`encodeURI()`，`decodeURI()`，`encodeURIComponent()`，`decodeURIComponent()`，`escape()`和`unescape()`这六个函数。

**EvalError**eval函数没有被正确执行时抛出的错误。

## 自定义错误

```
var RestError = function(status, name, message) {
  this.status = status;
  this.name = name;
  this.message = message;
};
RestError.prototype = new Error();
RestError.prototype.constructor = RestError;
```

## throw语句

用于终端程序执行，抛出一个意外或者错误。

```
throw new RestError(400, 'error name', 'error message');
```

## try...catch结构

```
try {
  throw new Error('出错了!');
} catch (e) {
  console.log(e.name + ": " + e.message);
  console.log(e.stack);
}
```

## finally代码块

try...catch语句允许在最后添加一个`finally`代码块，表示不管是否出现错误，都必须在最后运行的语句。

```
try {
  writeFile(Data);
} catch(e) {
  handleError(e);
} finally {
  closeFile();
}
```
