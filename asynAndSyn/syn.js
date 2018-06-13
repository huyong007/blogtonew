

/* //函数语法定义方式
function print(content) {
    console.log(content);

};
*/



//表达式定义函数方式
var print = function (content) {
    console.log(content);

};
print('world');
/*
# 语法定义和表达式定义的差别是：
- 语法定义的函数会有定义提前的优待编译期会把通过函数语法定义
的函数提前定义
- 函数表达式定义法没有提前的优待，
- 在某些场景下，表达式定义法可以减少函数名的声明同时可以减少代码量

*/

/*问题：括号里面参数什么时候用引号什么时候
不用引号*/