[Node.js 探秘：初识单线程的 Node.js](http://taobaofed.org/blog/2015/10/29/deep-into-node-1/)

# 第二遍总结
- Node.js通过``libuv``来处理与操作系统的交互，并且因此具备了异步、非阻塞、事件驱动的能力
- Node.js实际上是JavaScript执行线程的单线程，真正的I/O操作，底层API调用都是通过多线程执行的
- CPU密集型的任务是Node.js的软肋