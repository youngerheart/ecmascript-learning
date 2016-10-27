单线程模型是指js只在一个线程上运行，也就是同时只能执行一个任务，其他任务必须排队等待，而js引擎是有多个线程的，单个脚本只在一个线程上运行。而排队多是因为IO设备比较耗时。这是挂起等待中的任务，先运行后面的任务，即（event loop）机制。

## 消息队列

除了运行线程，js引擎还提供一个消息队列，里面是当前程序处理的消息，新的消息会push进队列。

运行线程只要发现消息队列不为空，就会取出第一位的消息，执行对应的回调函数，知道消息队列空为止。每条消息和一个回调函数联系，如果该消息没有回调函数则会被遗失。

## Event Loop

其定义是一种程序接口，用于等待发送消息和事件，可以将其理解为动态更新的消息队列本身。

任务可以分为两种，同步（synchronous）和异步（asynchronous）任务。

同步任务指在js执行进程上排队执行的任务，只有这个执行完毕才能执行下一个。异步任务指不进入js执行进程，而是进入“任务队列”，只有“任务队列”通知主进程某个异步任务可以执行了，该任务才进入js主进程执行。

如果有大量的异步任务（实际情况就是这样），它们会在“消息队列”中产生大量的消息。这些消息排成队，等候进入主线程。本质上，“消息队列”就是一个“先进先出”的数据结构。比如，点击鼠标就产生一系列消息（各种事件），mousedown事件排在mouseup事件前面，mouseup事件又排在click事件的前面。

## 定时器

包括`setTimeout`和`setInterval`，将指定代码移出本次执行，等到下一轮在检查知否到了指定时间，到了就执行相关代码，不到就等再下一轮重新判断。

如果定时器后的语句非常耗时，定时器也必须等待该语句执行完再执行，可能会造成性能问题（如集中发送ajax请求）。

#### 正常任务和微任务

正常情况下js的任务是同步执行的，即完成一个任务再执行下一个任务。只有遇到异步情况，执行顺序才改变。这时需要区分两种任务：正常任务（task）与微任务（macrotask），区别在于前者在下一轮Event Loop执行，“微任务”在本轮Event Loop所有任务结束后执行。

计时器为正常任务，微任务目前主要是Promise。