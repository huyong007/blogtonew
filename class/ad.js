/* 
Number.prototype.times = function (f, context) {
    var n = Number(this);
    for (var i = 0; i < n; i++)f.call(context, i);
};
var n = 3;
n.times(function (n) {
    console.log(n + " hello");

}); */
/* function noSpace(x) {
    console.log(x.split().map(function (x) { return x === true; }).join(""));
} */
/* 
var x = ["Ryan", "Kieran", "Jason", "Yous"];
var y = 'kiear';
console.log(x.filter(function (value) { return value.split('').length === 4;}));

console.log(3 < y.split('').length && y.split('').length<5 ); */


/* 
likes[] // must be "no one likes this"
likes["Peter"] // must be "Peter likes this"
likes["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes // must be "Alex, Jacob and 2 others like this" */
/* var names = ["Alex", "Jacob", "Mark", "Max"];

    console.log(names[0] + ',' + names[1] + ' and ' + '2 others like this');
    

function likes(names) {
    if (names.length === 0) { return 'no one likes this' }
    else if (names.length === 1) { return names[0] + ' like this' }
    else if (names.length === 2) { return names[0] + ' and ' + names[1] + ' like this' }
    else if (names.length === 3) { return names[0] + ',' + names[1] + ' and ' + names[2] + ' like this' }
    else  {
        return names[0] + ',' + names[1] + ' and ' + '2 others like this';
    }
} */
/* DNAStrand("ATTGC") # return "TAACG" */
var dna = 'ATTGC';

console.log(dna.replace('A', 'T'));

