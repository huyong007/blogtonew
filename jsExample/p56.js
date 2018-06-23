/* var scope="global";
function checkscope() {
    var scope="local";
    console.log(scope);
}
checkscope(); */

/* scope="global";
function checkcope2() {
    scope="local";
    myscope="local";
    console.log([scope, myscope]);
}                                           
console.log(scope);
console.log(myscope);
//这个例子其实是很好玩的，考察的知识点有node的执行逻辑，
//也有函数作用域的知识

checkcope2(); */
var scope="global scope";
function checkscope() {
    var scope="local scope";
    function nested() {
        var scope ="nested scope";
        console.log(scope);
        
    }
    return nested();
}
checkscope();
/*try catch finally ;continue ;break;return ;throw
的组合使用，需要再研究*/
/* try {
    scope = "global";
    function checkcope2() {
        scope = "local";
        myscope = "local";
        console.log([scope, myscope]);  
    }
    console.log(scope);
    
    console.log(myscope);
    checkcope2();
    console.log(scope);
   
}

finally{
   
    console.log('执行完了'); 
    return ;
    
} */
/* scope = "global";
function checkcope2() {
    scope = "local";
    myscope = "local";
    console.log([scope, myscope]);

}
console.log(scope);

checkcope2();
console.log(scope);
console.log(myscope);

 */
//while循环和for循环的理解加上break的使用规范
/* a = [1, 2, 3, 4, 5]
var i = 1;
while (i < a.length) {
    try {
        console.log(a[i]);
        i=break

    }
    finally {
        console.log("模拟for循环加深理解");

    }
} */
