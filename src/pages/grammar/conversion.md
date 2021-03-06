js是一种动态类型语言，变量没有类型限制，可以随时赋予任何值。虽然变量没有类型，但是数据是有类型的，如果运算符发现数据类型与预期不符，会自动转换类型。

```
'4' - '3' // 1
```

## 强制转换

使用`Number`，`String`，`Boolean`三个构造函数，手动将各种类型的值转换为数字，字符串或布尔值。

#### Number

原始类型的值都可以被Number转换为数值或者`NaN`，字符串中只要有一个字符无法转换则均返回`NaN`
对于对象均返回`NaN`

```
parseInt('42 cats') // 42
Number('42 cats') // NaN
Number({a: 1}) // NaN
```

该构造函数的处理为：调用对象自身的`valueOf`方法，如果返回原始类型的值则对该值使用Number函数，否则调用对象自身的`toString`方法，如果返回的是对象，则报错(TypeError)。

#### String

将任意类型的值转为字符串。其处理为：调用对象自身的toString方法，如果返回原始类型的值则使用String函数，返回的是对象则使用valueOf方法，如果返回的是原始类型的值则使用String函数，返回的是对象就报错(TypeError)。

#### Boolean

除了下列值返回值为`false`，其他均为`true`

* undefined
* null
* -0, 0 或 +0
* NaN
* ''（空字符串）

## 自动转换

预期需要什么类型的值就用该类型的转换函数

**Boolean** 如条件语句中会自动调用Boolean。
**String** 如字符串与其他类型值的加法运算。
**Number** 除了加法之外的运算。
