/* 问题一：var number = new Number(35231); */

/* console.log(number.toString().split("").map(function (value) {return  Number(value);}));
console.log(Number('3')); */
/* ['3', '5', '2', '3', '1'].map(function (value) {
    Number(value);
 ;}); */
/* var n = 35231; */
/* new Number(35231).toString().split("").map(Number).reverse();
console.log(
    new Number(35231).toString().split("").map(Number).reverse()
); */
/* function digitize(n) {
    return (n + '').split('').map(Number).reverse();
}
console.log(String(35231).split('').map(Number));


function digitize(n) {
    return String(n).split('').reverse().map(Number)
} */

/* 问题二：if (numbers[0] === undefined) return;
else var y = numbers.sort(function (a, b) {
    return a - b;
});
return x = y[1] + y[2];
console.log(x = y[1] + y[2]); */
/* names = ["Alex", "Jacob", "Mark", "Max","huyong"];

function likes(names) {
    if (names.length === 0) { return 'no one likes this' }
    else if (names.length === 1) { return names[0] + ' likes this' }
    else if (names.length === 2) { return names[0] + ' and ' + names[1] + ' like this' }
    else if (names.length === 3) { return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this' }
    else {
        console.log(names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this');
        
    }
}
likes(names);
/*在最后一个else的输出中names.length-2 和(names.length-2)两者会得到不同的结果，一个长字符会把前者认定为三个字符组成的，进而进行
字符中间的加减转换，*/ 