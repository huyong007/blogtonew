/* 

function test(o) {
    var i = 0;
    if (typeof o == "object") {
        var j = 0;
        for (var k = 0; k < 10; k++) {
            console.log(k);
        }
        console.log(k);
    }
    console.log(j);
}


test(this);



var a = 3;
function f() {
    console.log(b);
    
    if (a = 3) {
        var b = 2;
        console.log(b);
    }
}

f(); */

/* var truevar = 1;
fakevar = 2;
this.fakevar2 = 3;
console.log(this.fakevar2);
console.log(delete truevar);
console.log(delete fakevar);
console.log(delete this.fakevar2);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             


 */

/* function f(ac) {

console.log(bc);

    setTimeout((bc) => {

        var bc = 3;
        console.log(ac + bc);
        console.log(bc);

    }, 1000);
};
f(2); */
/* 
function counter() {
    var n = 0;
    return {
        count: function () { return n++; },
        reset: function () { n = 0; }
    };
}
var c = counter(); var d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count()); */
function counter(n) {
    return {
        get count() { console.log(n);return n++; },
        set count(m) {
            console.log(n);
            console.log(m);
            
            
            if (m >= n) n = m;
            else throw Error("count can only be set to a larger value");
        }
    };
}

var c = counter(1000);

console.log(c.count);
console.log(c.count = 2000);
console.log(c.count = 20010);//n=20010
console.log(c.count);

