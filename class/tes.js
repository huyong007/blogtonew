//设计者设计的调用fs库来给结果的函数
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