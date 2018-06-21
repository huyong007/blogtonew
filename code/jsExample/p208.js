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
console.log("f1");

var x = [1, 2, 3, 4, 5];
console.log(x[1]);

console.log("f2");
var y =  [];
console.log("f3");

    console.log("f4");
    for (var i = 0; i < x.length; i++) {
        console.log("f5");
         y[i] = x[i];
    }
    console.log("f6");
    console.log(y[1]);
    console.log("f7");
    console.log(y);
    console.log("f8");

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
console.log("f9");

console.log("f10");
//数组的比较
/* function equalArray(x,y) {
    if(x.length!=y.length){
        return "x,y不相等"
    };
    for(i=0;i<x.length;i++){
        if(x[i]!=y[i]){
            return "不相等"
        }
    };
    return "相等"
} */