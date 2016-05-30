// 构造器函数的语法糖: async函数

var func = (res) => {
  return new Promise((resolve, reject) => {
    if (res) resolve('resolved');
    else reject('rejected');
  });
};
var example = async () => {
  try {
    console.log(await func(true));
    console.log(await func());
  } catch (e) {
    console.log(e);
  }
};

example();
