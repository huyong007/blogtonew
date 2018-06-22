/* function defineClass(
    constructor,
    methods,
    statics) {
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);
    return constructor;

}
var SimpleRange =
    defineClass(function (f, t) {
        this.f = f; this.t = t;
    },
        {
            includes: function (x) {
                return this.f <= x && x <= this.x;
            },
            toString: function () {
                return this.f + "..." + this.t;
            }
        },
        {
            upto: function (t) {
                return new SimpleRange(o, t);
            }
        }

    ) */

//数组的复制


/* var x = [1, 2, 'a', 4, 5];
console.log(x[1]);
console.log(typeof (x[1]));

console.log(x[2] + x.length ); */
/* console.log(10 + 'object');
console.log('7' + '3');
var n = 1 - 'x';
console.log(n);
console.log(n+'objects'); */








/* 
var y = [];

console.log("f4");
var i = 0;
for (; i < x.length;) {
    y[i] = x[i]; //赋值表达式的写法，左值和右值要搞清楚
    i = i + 1;
}
console.log(y[1]);

console.log(y); */

/* var a = ['a', 'b', 'c'];
var b = [];
for (var i = 0; i < a.length; i++) {
    b[i] = a[i];
}
console.log(b);
 */
/* function fuzhiArrays(x) {
    return function (y) {
        return f(x,y);
    }
}
fuzhiArrays(x)(y); */

//数组的比较
/* function equalArray(x, y) {
    if (x.length != y.length) {
        return "x,y不相等"
    };
    for (i = 0; i < x.length; i++) {
        if (x[i] != y[i]) {
            return "不相等"
        }
    };
    console.log("相等");

}
equalArray(x, y); */


/* var d = new Date(201, 0, 1);
console.log(d.valueOf());

console.log([1, 2, 3].toString());
console.log((function (x) {
    f(x);
}).toString());

console.log(new Date(2010, 0, 1).toString()); */
/* console.log([0].toString());
console.log(['a'].toString()); */
/* var now = new Date();
console.log(typeof(now + 1));
console.log(typeof(now - 1));
console.log(now == now.toString());
console.log(now > now - 1);
console.log(now-1);
console.log(Number(now)); */

for (let i = 0,j=10; i<10; i++,j--) {
console.log(i*j);

}
/* const i = 1;
console.log(i); */










