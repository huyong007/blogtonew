
/* var axios = require('axios');

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

 function readUserInfo(name) {
    return axios.get('https://cnodejs.org/api/v1/user/' + name)
        .then(readData)
        .then(result => result.data)
} 

readTopics(); */
/* const { URL } = require('url');
const myURL = new URL('http://xugaoyang.com/zone?zoneId=59d0a6c17a33600f00b862c1');
console.log(myURL.searchParams); */
// Prints https://example.org/foo

var publicKeyList = ["code1-3443", "code2-f8759", "code3-196433"];
var lengths = [];
(function () {
    publicKeyList.forEach(function (value) {
        lengths.push(value.length);
    });
    console.log(lengths);
}
)();

var publicKeyList = ["code1-3443", "code2-f8759", "code3-196433"];
var lengths = publicKeyList.map(function (item) {
    return item.length;
});

