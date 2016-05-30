// 回调函数, 事件监听, 发布/订阅, Promise 对象 之后出现的异步编程方法
// Generator 生成器 yield 生成

var func = (res) => {
  return new Promise((resolve, reject) => {
    if (res) resolve('resolved');
    else reject('rejected');
  });
};

// 箭头函数不能用作 Generator 函数

var example = function*(res) {
  // 暂停，去做 func 的事情
  yield func(true);
  yield func();
}

// 调用后返回一个内部指针(即遍历器g)
var a = example();

var walk = () => {
  // 调用遍历器的next 方法以返回 yield 后的内容
  var b = a.next();
  b.value.then((res) => {
    console.log(res);
    if (b.done) return;
    walk();
  }).catch((err) => {
    console.log(err);
    if (b.done) return;
  });
}

walk();
