
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

/* var publicKeyList = ["code1-3443", "code2-f8759", "code3-196433"];
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

 */
/* let list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let a = [];
for(i=0;i<list.length;i++){
    a[i]=list[i][0];
}

b=list.map(function (x) {
   return  x[0];
});
 */

let list = [100, 99, 98];

for (let i = 0; i < list.length; i++) {
    console.log('第' + (i + 1) + "名：" + list[i]);
}

list.forEach(function () {
    let v = v + 1;
    a[i] = v;
    console.log('第' + (i + 1) + '名:' + v);


})

/* let [bar,foo]=false;
console.log(bar); */
