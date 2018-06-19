
var R = require('ramda');
  
/*
List Important
R.filter R.find R.findIndex R.uniq R.map

Function
R.curry R.compose

Object
R.clone R.prop R.propEq
Important*/


/* function isEven(n) {
    return n % 2 === 0;
};
var isEven = n => n % 2 === 0;
var x = R.filter(isEven, [1, 3, 2, 4, 4, 8]);
console.log(x);
var x = R.filter(isEven, { a: 1, b: 3,c: 2,d: 4,e: 4,z: 8});
console.log(x); */
/* var abby = { name: 'abby', age: 7, hair: 'blond' };
var fred = { name: 'fred', age:12, hair: 'brown' };
var rusty = { name: 'rusty', age:10, hair: 'brown' };
var alois = { name: 'alois', age: 14, disposition: 'sruly' };
var kids = [abby, fred, rusty, alois];

console.log(R.filter(hasAgeRange, kids));
console.log(R.filter(R.propEq('age', 12))(kids));
console.log(R.find(R.propEq('age', 12))(kids).name);
var xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
var y = R.propEq('a', 2);
console.log(R.find(R.propEq('a', 2))(xs));
console.log(R.filter(R.propEq('a', 2))(xs)); */

/* var xs = [{ a: 1 }, { a: 2 }, { a: 3 }];

console.log(R.findIndex(R.propEq('b', 2))(xs));
console.log(R.findIndex(R.propEq('a', 4))(xs)); */
/* //数组的去重
console.log(R.uniq(['a', 'b', 'a', NaN, undefined]));


console.log(R.uniq([1, 1, 'c', 2, 'd'])); */
console.log(R.replace(/A/g, 'T', 'ATTGC'));
console.log(R.replace(/T/g, 'A', 'ATTGC'));



