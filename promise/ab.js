//使用promise抓取cnode社区用户数据
//引入axios
var axios = require('axios');
//构建调用户名的函数
function readName() {
    axios.get('https://cnodejs.org/api/v1/topics?page=1&tab=good&limit=1&mdrender=false')
        .then(response => {
            return response.data.data[0].author.loginname;
        })
        .then(name => { nameInfo(name); })
        .catch(console.log);
}
function nameInfo(name) {
    axios.get('https://cnodejs.org/api/v1/user/' + name)
        .then(response => {
            console.log(response.data.data);
        })
        .catch(console.log);
}

readName();


