/* 在javascript权威指南的第六版，p159*/
var objects = [{ x: 1, a: 1 }, { y: 2, a: 2 }, { z: 3, a: 3 }];
var leftunion = objects.reduce(union);//{x:1,y:2,z:3,a:1}
var rightunion = objects.reduceRight(union);//{x:1,y:2,z:3,a:3}
/*书中p130页和p31页关于union和extend的设计是这样的*/
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}
function union(o, p) { return extend(extend({}, o), p); }
/* 我的出来的结果和书中的出来的leftunion和rightunion的值正好是相反的，
书上也讲到，union()函数在碰到两个对象有同名属性时，使用第一个参数的属性值，
按照这个说法确实和结果相符，但是验证结果是他给出的union函数使用的extend()
使用第二个参数作为的属性值进行合并的，各位同学能帮我看看哪里错了吗？ */