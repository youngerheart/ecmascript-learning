## 概述

js的每一个值，都属于某一种数据类型。js的数据类型共有6种:

* 数值（number）：整数和小数。
* 字符串（string）：字符组成的文本。
* 布尔（boolean）：`true`和`false`两个特定值。
* undefined：表示“未定义”或不存在，此处目前没有任何值。
* null：表示空缺，此处应该有一个值，但目前为空。
* 对象（object）：各种值组成的集合

将数值，字符串，布尔称为原始类型值，即最基本数据类型，将对象称为合成类型值，即其往往是多个原始类型值的合成，可以看做一个存放各种值的容器，`undefined`和`null`看做两个特殊值。

对象又可分为三种子类型：

* 狭义的对象（object）
* 数组（array）
* 函数（function）

js所有数据，都可以视为广义的对象。原始类型的数据亦可以用对象方式调用。一般的“对象”都特指狭义的对象。

## 判断类型

有三种方法判断一个值的类型

* typeof运算符
* instanceof运算符
* Object.prototype.toString方法

typeof对于数值，字符串，布尔分别返回`number`，`string`，`boolean`。

对于函数返回`function`，对undefined返回`undefined`。即可用于正确判断变量是否声明。

对其他情况都返回`object`。对于null而言，95年第一版就有bug，但并不是说null就属于对象，本质上其是一个类似于`undefined`的特殊值。

这里可以用instanceof运算符区分array与object类型。

#### null与undefined

null表示空值，如调用函数时不需要传入某个参数，这时就传入null。

undefined表示“未定义”，场景如下

* typeof未声明变量。
* 变量声明了，但是没有赋值。
* 调用函数时应该提供的参数没有提供。
* 对象中没有赋值的属性。
* 函数的默认返回值。
