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
  try {
    var r1 = yield func(true);
    console.log(r1);
    var r2 = yield func();
    console.log(r2);
  } catch (err) {
    console.log(err);
  }
}

// 调用后返回一个内部指针(即遍历器g)
var a = example();
var b = a.next();
var walk = () => {
  // 调用遍历器的next 方法以返回 yield 后的内容
  b.value.then((res) => {
    b = a.next(res);
    if (b.done) return;
    walk();
  }).catch((err) => {
    a.throw(err);
    if (b.done) return;
  });
}

walk();
