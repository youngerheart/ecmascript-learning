在读写外部数据时可以使用js的异步模式，异步模式有如下几种：

* 回调函数
* 事件监听
* 发布/订阅（和事件监听类似，提供查看信号，信号订阅者的接口）

而传统的回调函数写法使得代码混成一团，变得横向发展而不是向下发展。Promise规范是为了解决这个问题而提出的，目标是使用正常的程序流程处理异步操作。

```
po
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
```

console.log只显示回调函数step3的返回值，而console.error可以显示step1、step2、step3之中任意一个发生的错误。也就是说，假定step1操作失败，抛出一个错误，这时step2和step3都不会再执行了（因为它们是操作成功的回调函数，而不是操作失败的回调函数）。Promises对象开始寻找，接下来第一个操作失败时的回调函数，在上面代码中是console.error。这就是说，Promises对象的错误有传递性。

## Promise的静态方法

* **race** 方法返回一个promise，这个promise在iterable(array)中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
* **all** 方法返回一个promise，该promise会等iterable参数内的所有promise都被resolve后被resolve，或以第一个promise被reject的原因而reject 。
* **reject** 方法返回一个用reason拒绝的Promise。
* **resolve** 方法返回一个以给定值解析后的Promise对象。但如果这个值是个thenable（即带有then方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态（指resolved/rejected/pending/settled）；否则以该值为成功状态返回promise对象。
