//用异步的方式拿到社区用户数据
var request = require('request');
//构建函数拿到用户数据
function readName() {
    request(
        'https://cnodejs.org/api/v1/topics?page=1&tab=good&limit=1&mdrender=false',
        function (error, reponse, body) {
            if (error) {
                console.log(error);
                return;
            }
            var list = JSON.parse(body).data;
            //console.log(list[0].author.loginname);
            return readInfo(list[0].author.loginname);
        })


};

function readInfo(name) {
    request(
        'https://cnodejs.org/api/v1/user/' + name,
        function (error, reponse, body) {
            if (error) {
                console.log(error);
            }
            var info = JSON.parse(body).data;
            console.log(info);
        });
}
readName();