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

