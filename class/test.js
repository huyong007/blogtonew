//index.js升级为链式写法
var test = require('./tes.js');

test.readPromise()
    .then(function (content) {
        console.log(content);
    })
    .catch(function (err) {
        console.log(err);
    });