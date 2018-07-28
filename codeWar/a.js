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
/* var objects = [{ x: 1, a: 1 }, { y: 2, a: 2 }, { z: 3, a: 3 }];
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
};
function union(o, p) {
    console.log(o);
    console.log(p);
  return   extend(extend({}, o), p);
};
 
var leftunion = objects.reduce(union);
console.log(leftunion);
var rightunion=objects.reduceRight(union);
console.log(rightunion); */
/* let list = [1, 2, 3];
var sum = list.reduce(function (x, y) { return x + y },0);
console.log(sum);
let s = 0;
list.forEach(function (item) { return s += item });
console.log(s);
let m =0;
for(let i=0;i<list.length;i++){
    m +=list[i];
};
console.log(m); */
/* 语义更清晰，扩展性更好， */
/* const array1=[[0,1],[2,3],[4,5]].reduceRight(
    (previousValue,currentValue)=>previousValue.concat(currentValue)

);
console.log(array1); */


var arr = [1, [2, [[9, 0], 3, [2, 3]]]];
/* 方法一：function flatten(arr) {
    var result = [];
    
    for (let i = 0;  i < arr.length; i=i+1) {
        console.log(arr[i]);
        console.log('flag1');
        
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
            console.log(result);
            console.log('flag2');

        } else {
            result.push(arr[i]);
            console.log(result);
            console.log('flag3');
            
        }
    }
    console.log('flag4');
    return result;
}

console.log(flatten(arr));//[1,2,3,4] */
/* 方法二： */
/* var arr = [1, [2, [[9, 0], 3, [2, 3]]]];
var result = arr.toString().split(',').map(function (x) {
    return Number(x);
})
console.log(result); */
/* function doAdd(num1, num2) {
    console.log(num2);
    arguments[1] = 10;
    console.log(arguments[0] + num2);
    console.log(num2);
    
}
doAdd(10,3); */
/* 
var color = 'blue';
function chageColor() {
    if (color === 'blue') {
        color = 'red';
    } else {
        color = 'blue';
    }
};
chageColor();
console.log('color is now ' + color);
console.log('-----------------');
var color = 'blue';
function changeColor() {
    var anotherColor = 'red';
    console.log('second color is ' + color);
    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        console.log(color);

    }
    swapColors();
}
changeColor();
 */
