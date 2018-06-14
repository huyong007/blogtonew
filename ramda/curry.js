var R = require('ramda');
//一个普通的加法函数
function add(x, y) {
    console.log(x + y);

};
add(1, 2);//3
//一个curry的加法函数
function ADD(x) {
    return function (y) {
        console.log(x + y);
        ;
    }
};
ADD(2)(2);//4
//设置一个自增一的加法函数
var ADDONE = ADD(1);
ADDONE(5);//6
//对普通的加法函数进行curry
var addCurry = R.curry(function (x, y) {
    console.log(x + y);
});
//对一个curry后的普通函数设置自增一的加法函数
var addCurryOne = addCurry(1);
addCurryOne(9);//10
//也可以直接在原函数的基础上写
addCurry(1)(6);//7
addCurry(9)(8);//17