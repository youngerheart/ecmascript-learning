## 概念

#### DOM

全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为脚本对象，从而进行各种操作。

浏览器会根据DOM模型，将结构化文档解析为节点，由节点组成树状结构。所有节点和最终的接口都有规范的对外接口。

js是最常用于操作DOM的语言，操作DOM是js最常见的任务。

#### 节点

DOM的最小组成单位是节点（node）。文档的树形结构就是由各种不同类型的节点组成。每个节点可以当做文档树的一片叶子。文档的类型有七种：

* **Document** 整个文档树的顶层节点
* **DocumentType** doctype标签（比如<!DOCTYPE html>，可以用document.doctype取得）
* **Element** 网页的各种HTML标签（比如<body>、<a>等）
* **Attribute** 网页元素的属性（比如class="right"）
* **Text** 标签之间或标签包含的文本
* **Comment** 注释
* **DocumentFragment** 文档的片段

#### 节点树

一个文章的所有节点，按所在的层级，可以抽象为一种树状结构。最顶层即document节点，代表整个文档，包含了html标签（根节点），其他节点都是根节点的下级，且存在三种关系：

* 父节点（parentNode）
* 子节点（childNodes）firstChild，lastChild
* 同级节点（sibling）nextSibling，previousSibling

## 实例特征相关属性

所有节点对象都是浏览器内置Node对象的示例，继承其属性方法。

**nodeName** 返回节点名称，**nodeType**属性返回节点类型常数值。具体如下：
（类型名同时也是Node的静态属性）

|类型|nodeName|nodeType|
|---|---|---|
|ELEMENT_NODE|大写的HTML元素名|1|
|ATTRIBUTE_NODE|属性名|2|
|TEXT_NODE|#text|3|
|COMMENT_NODE|#comment|8|
|DOCUMENT_NODE|#document|9|
|DOCUMENT_TYPE_NODE|等同于DocumentType.name|10|
|DOCUMENT_FRAGMENT_NODE|#document-fragment|11|

使用nodeType确定一个节点的类型：

```
document.querySelector('a').nodeType === Node.ELEMENT_NODE
// true
```

**nodeValue** 属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。只有Text，Comment，XML文档的CDATA节点有文本值。

**textContent** 自动忽略HTML标签，返回当前节点和它所有后代节点的文本内容。

**baseURL** 只读属性，返回一个字符串，表示当前网页的绝对路径，如果无法取到这个值则返回null。

## 实例节点相关属性

**ownerDocument** 返回当前节点所在的顶层文档对象（即document），document本身的ownerDocument属性返回null。

**nextSibling** **previousSibling** 分别返回当前节点后的第一个和之前的第一个节点。如果没有则返回null。

**parentNode** 返回当前节点的父节点，对于一个节点其父节点只可能是element，document和documentfragment。

**parentElement** 返回父Element节点，如果没有父节点或父节点不是Element节点，返回null。

**childNodes** 返回一个NodeList集合，成员包括当前节点的所有子节点。没有子节点则返回null。

**firstChild** **lastChild** 返回第一个与最后一个子节点。

## 实例方法

**appendChild** 接受一个节点对象作为参数，将其作为最后一个节点，插入当前节点。

**hasChildNodes** 表示当前节点是否有子节点。

**cloneNode** 克隆一个几点，接受一个参数表示是否同时克隆子节点，默认为false。

**insertBefore** 将某个节点插入当前节点的指定位置。接受两个参数，第一个是要插入的节点，第二个是当前节点的一个子节点，新节点插入这个节点的前面。如果第二个参数为null则插入最后。不存在insertAter方法，可以使用insertBefore(s1, s2.nextSibling)代替。

**removeChild** 接受一个子节点作为参数，从当前节点删除该子节点，返回被删除的子节点。

**replaceChild** 用一个新的节点替换当前节点的一个子节点。它返回被替换走的那个节点。

```
replacedNode = parentNode.replaceChild(newChild, oldChild);
```

**contains** 接受一个节点作为参数，判断该节点是否为当前节点的子节点。（对于节点自己也会返回true）

**compareDocumentPosition** 返回一个7位二进制值，表示参数节点与当前节点的关系。

|数值|含义|
|---|---|
|0|两个节点相同|
|1|不在同一个文档|
|2|同级，参数节点在当前节点前|
|4|同级，参数节点在当前节点后面|
|8|参数节点包含当前节点|
|16|当前节点包含参数节点|
|32|浏览器的私有用途|

定位会包含多重信息，如“当前节点包含参数节点，且参数节点在当前节点后”则返回20（二进制010100）

**isEqualNode** 判断两个节点是否相等，即两个节点类型，属性，子节点相同。

**normalize** 用于清理当前节点内部text节点，去除空的文本节点，将毗邻的文本节点合并成一个。

## NodeList

其实例对象是类数组对象，成员是节点对象。由node实例的childNodes，querySelectorAll方法等返回。

```
document.childNodes instanceof NodeList // true
```

childNodes返回的是一个动态NodeList实例对象，当前节点新增一个节点后这个对象的成员也增加1，querySelectorAll返回一个静态实例对象，DOM内部变化不会实时反映在该方法的返回结果中。

## HTMLCollection

其实例对象也是类数组对象，由document.links，document.forms，document.images等属性返回。和NodeList对象的区别有：

1. HTMLCollection实例对象的成员只能是Element节点。
2. HTMLCollection实例对象都是动态的。
3. HTMLCollection实例对象可以用id属性或name属性引用节点元素。

HTMLCollection实例的namedItem方法根据成员的ID属性或name属性，返回该成员。如果没有对应的成员，则返回null。

```
var elem = document.forms.namedItem('myForm');
// 等价于下面的写法
var elem = document.forms['myForm'];
```

## ParentNode接口

Element，Document节点和DocumentFragment节点部署了ParentNode接口，凡是这三类节点，具有以下四个属性，用于获取Element子节点。

**children** 返回一个动态HTMLCollection集合，由当前节点的所有Element子节点组成。

**firstElementChild** **lastElementChild** 返回当前节点的第一个与最后一个Element节点。

**childElementCount** 返回当前节点的所有Element子节点数目。

## ChildNode接口

Element节点、DocumentType节点和CharacterData接口，部署了ChildNode接口。但是目前浏览器只支持其中的一种方法：

**remove** 用于移除当前节点。 
