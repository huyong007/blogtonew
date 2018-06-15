var R = require('ramda');
var util = require('util');
var fs = require('fs');
var dirPathString = './';
var outputPathString = './huyong.txt';
const readdir = util.promisify(fs.readdir);
function writeFile(path) {
    return function (content) {
        return util.promisily(fs.writeFile)(path, content);
    };
}

readdir(dirPathString)
    .then(R.filter(R.test(/.json/)))
    .then(R.filter(R.compose(R.not, R.isNil)))
    .then(writeFile(outputPathString))
    .catch(console.log);
/* 
老师的总结：
普通的编程就是要定义很多临时或者全局变量来接收值，函数式编程的过程看不到额外的变量名，变量就像幽灵一样在各个函数中贯穿。
普通的异步有明显的 callback，promise 不需要明确的 callback，代码更加流畅。
普通编程总是要用 if-else 来检查 callback 的错误处理，promise 的 catch 接管一切异常。
普通编程用 for 循环来遍历数组，函数式编程借助 filter 和条件函数来重新定义一个过滤数据的过程函数，语义上更加自然。 */