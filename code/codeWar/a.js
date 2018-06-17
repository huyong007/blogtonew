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
