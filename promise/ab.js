//使用promise抓取cnode社区用户数据
//引入axios
var axios = require('axios');
//构建调用户名的函数
//构建重复操作的替代函数
var data = function (object) {
    return object.data;
};
function readName() {
    axios.get('https://cnodejs.org/api/v1/topics?page=1&tab=good&limit=1&mdrender=false')
        .then(data)
        .then(response => {
            return response.data[0].author.loginname;
        })
        .then(nameInfo)
        .catch(console.log);
}
function nameInfo(name) {
    axios.get('https://cnodejs.org/api/v1/user/' + name)
        .then(data)
        .then(data)
        .then(console.log)
        .catch(console.log);
}

readName();


