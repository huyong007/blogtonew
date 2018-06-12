//引入类的写法，过程编程的搞定加一
class Functor {
    construtor(val) {
        this.val = val;
    }
}
function addOne(val) {
    return val + 1;
}
var obj = new Functor(1);
var val = addOne(obj.val);
var obj2 = new Functor(val);
//优化处理
class Functor {
    constructor(val) {
        this.val = val;
    }
    map(f) {
        return new Functor(f(this.val));
    }
}
var obj = new Functor('js');
var obj2 = obj.map(function (val) {
    return 'hello ' + val;
});
var obj3 = obj2.map(function (val) {
    return val + ' how are u';
});
var obj4 = obj3.map(function (val) {
    console.log(val);
});
//链式写法
class Functor{
    constructor(val) {
        this.val = val;
    };
    map(f) {
        return new Functor(f(this.val));
    }
}
var obj = new Functor('js');
obj.map(function (val) {
    return 'hello, ' + val;
})
    .map(function (val) {
        return 'val, ' + 'how are u!';
    })
    .map(function (val) {
        console.log(val);
    });
/*类字段和类属性,根据犀牛书给出的概念，类字段就是老师给到的
contructor(val){this.val = val;};而老师给的类属性就是map
或者是then函数map(f){return new Functor(f(this.val));}
计算发生在函数f里面，计算之后得到一个新的val，此时return之
后新的构造函数给出来了，新的实例同样具有map方法，这个新
的实例就诞生了，老师讲到关键点是类map函数返回的都是一个对象，
该对象也具有map方法*/