function getName(callback) {
    setTimeout(function () {
        callback('wang xia');
    }, 100);
}

function getBirthday(name, callback) {
    setTime(function () {
        if (name && name.includes("wang xia")) {
            callback(name + '.芳龄18')
        } else {
            callback('鬼知道是谁')
        }
    }, 100);
}

getName(function (name) {
    getBirthday(name, function (message) {
        console.log(message);
    });
});
//promise改进上述流程