
var axios = require('axios');

var readData = function (response) {
    return response.data;
};

function readTopics() {
    return axios
        .get(
            'http://xugaoyang.com/zone?zoneId=59d0a6c17a33600f00b862c1')
        .then((response) => console.log(response.data))
        .catch(console.log)
}

/* function readUserInfo(name) {
    return axios.get('https://cnodejs.org/api/v1/user/' + name)
        .then(readData)
        .then(result => result.data)
} */

readTopics();