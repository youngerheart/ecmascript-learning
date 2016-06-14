// 一些有用但没被经常用到的Array方法

var arr = [1, 2, 3, 4, 5, 5];

// es2015: 返回第一个匹配的元素
var a1 = arr.find(item => !!(item % 2));
console.log(a1);

// es2015: 利用 map 返回数组元素的属性值
var a2 = arr.map(item => item.constructor);
console.log(a2);

// es2016: 替代 indexOf, 检查是否包含某个元素 node6 支持
var a3 = arr.includes(2);
console.log(a3);

// es2015: 替代 Array.prototype.slice.call 把一个类数组转换成一个数组
var a4 = null;
// 箭头函数的 arguments貌似有问题
var func1 = function() {
  a4 = Array.from(arguments);
  console.log(a4);
};
func1(1, 2, 3);

var a5 = Array.from('younger');
console.log(a5);

// 生成一个数组
var a6 = Array.from({length: 10}, (item, index) => {
  return index;
});
console.log(a6);

// es2015: 生成一个过滤后的数组
var a7 = arr.filter(item => !!(item % 2));
console.log(a7);

// es2015: 通过 Set 去除重复值
var a8 = [...new Set(arr)];
console.log(a8);
