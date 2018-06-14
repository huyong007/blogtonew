//把fs使用promise改造成promise来读取文件的函数，拿到文件
var fs = require('fs');
function readPromise() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./ot.js', 'utf-8',
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
//接收promise给的结果进行结果展示，展示文件
var test = require('./tes.js');

test.readPromise()
    .then(function (content) {
        console.log(content);
    })
    .catch(function (err) {
        console.log(err);
    });

// 正常的异步处理，给结果的函数，设计者设计的给结果的函数，拿到文件
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
//展示结果的文件，调用者调用拿结果的函数，展示文件
var fsextra = require('./upfuntion.js');
fsextra.read(function (err, content) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(content);
});
/*总结：两个函数都是需要用到fs，比较两者发现，第一种使用promise更为简单，
不需要关注太多的细节，都是从参数到参数的操作，而第二种既要关注流程，
还要关注参数，还要关注错误处理，非常的麻烦，一不小心就搞错了，两者的使用的主要区别也
是第一种主要是把错误和结果都给使用闭包给了两个通道，而第二个是一个函数处理两个参数
，如果参数是汽车，函数式就是双车道，普通的异步就是单车道，最重要的是改造普通的函数
其实就是把单车道改造成双车道，而函数式最重要最关键的是返回的一定要是一个promise对象，而不是
其他*/