[Node.js 探秘：初识单线程的 Node.js](http://taobaofed.org/blog/2015/10/29/deep-into-node-1/)

# 第二遍总结
- Node.js通过``libuv``来处理与操作系统的交互，并且因此具备了异步、非阻塞、事件驱动的能力
- Node.js实际上是JavaScript执行线程的单线程，真正的I/O操作，底层API调用都是通过多线程执行的
- CPU密集型的任务是Node.js的软肋
# 第三遍总结：
- ``libuv``是整个node.js如此牛逼的关键所在
- 他为整个node.js提供标准的api让上层js不用关注各种层面的差别
- 他是事件驱动的，轮循``while true``来完成事件的操作
- 一个对象进来然后一个对象出去