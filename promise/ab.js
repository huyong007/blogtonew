//使用promise抓取cnode社区用户数据
//引入axios
var axios = require('axios');
//构建调用户名的函数
//构建重复操作的替代函数
var getData = function (object) {
    return object.data;
};
function getName() {
     return axios.get('https://cnodejs.org/api/v1/topics?page=1&tab=good&limit=1&mdrender=false')
        .then(getData)
        .then(response => {
            return response.data[0].author.loginname;
        })
        .catch(console.log);
}
function getNameInfo(name) {
    return axios.get('https://cnodejs.org/api/v1/user/' + name)
        .then(getData)
        .then(result => {
            return result.data;
        })
        .catch(console.log);
}

getName().then(getNameInfo).then(console.log);
;


