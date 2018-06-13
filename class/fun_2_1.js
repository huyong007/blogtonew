// 给结果的函数，设计者设计的给结果的函数
var fs = require('fs');
function read(callback) {
    fs.readFile('./package.json', 'utf-8',
        function (err, content) {
            if (err) {
                return callback(err);
            }
            callback(null, content);
        });
}
module.exports = { read };
//展示结果的文件，调用者调用拿结果的函数
var fsextra = require('./upfuntion.js');
fsextra.read(function (err, content) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(content);
});
/*总结：两个函数放在一起来看，上面一个是工具，下面一个是使用工具
,使用工具的必须符合规范就是callback(err,content),也是必须得了解
工具的两个功能，也就时api给的err和content两个参数，少一个就完蛋了
就无法使用*/


var fs = require('fs');
function readPromise(callback) {
    return new Promise(function (resole, reject) {
        fs.readFile('./package.json', 'utf-8',
            function (err, content) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(content);
            });
    });
}
module.exports = { readPromise };
//index.js
var fsextra = require('./fs-extra.js');
var promise = fsextra.readPromise();
promise.then(function (content) {
    console.log(content);
});
promise.catch(function (err) {
    console.log(err);
});
//index.js升级为链式写法
fsextra.readPromise()
    .then(function (content) {
        console.log(content);
    })
    .catch(function (err) {
        console.log(err);
    });
/*
# 两个比较共同点：
- 从设计者的角度考虑，读取文件的操作都有两个参数，err和content
- 从使用者的角度考虑，拿到文件的操作都需要处理两个参数，err和content
- 从设计者的角度来看，异步处理和promise都需要使用fs.readFile();
整个函数
- 区别是异步callback处理设计者给的两个参数是仍然是使用一个函数
来处理两个参数，出错概率增大，既要关注参数是否被改变，还要关注
使用者接收是不是正确
- promise在设计函数的就把两个参数给使用两个函数包裹，变成两个
纯函数，不受上下文影响，在各自的通道里面往下走，focus点对于
使用者来说就是如何接住结果
- 对于同样的两个结果err和content和同样的fs.readFile函数，异步
处理和promise处理方式一个使用规范中的callback(err,content),
错误优先的原则处理，一个函数包裹两个参数，另一个使用一个函数包裹
一个参数，都能够达到目的，不过对于整体从设计和使用总的来看，promise
因为关注的点比较少更有利于设计和使用，不过如果把异步处理的API写的
足够清晰和规范，异步可能更有利于推广，毕竟从学习函数的难度来看是
先学习异步再学习promise，但是对于会了的人来说肯定会选择promise，
因为节省了自己的精力，降低了自己写API的难度，减少了自己程序出错的概率
- 异步：什么是异步？老师在讲解异步函数的时候给出的例子是老板让秘书查
机票，下达指令之后双方该干啥干啥，查完之后秘书把结果给到老板，同步：
什么是同步，总结下自己对于同步和异步还是理解的不够清晰。
 */