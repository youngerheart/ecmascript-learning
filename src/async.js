var func = (res) => {
  return new Promise((resolve, reject) => {
    if (res) resolve('resolved');
    else reject('rejected');
  });
};
var example = async () => {
  try {
    console.log(await func());
  } catch (e) {
    console.log(e);
  }
};

example();
