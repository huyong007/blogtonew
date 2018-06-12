var factorial = function fac(num) {
    if (num <= 1) {
        return 1;
    } else {
        // 闭包
        return num * fac(num - 1);

    }
}
var result = factorial(4);
console.log("这是最后下面4的阶乘：", result);
function test1(num) {
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log("for循环递归", test1(5));