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
/* function displayInfo(args){
    var output ='';
    if(typeof args.name=='string'){
        output+='Name '+args.name+'\n';
    }
    if(typeof args.age=='number'){
        output+='Age: '+args.age+'\n';
    }
    console.log(output);
    
}
displayInfo({
    name:'xiaohua',
    age:29
});
displayInfo({
    name:'xiaowang'
}); */
/* var addSomeNumber = function (num) {
    return num + 10;
};
var addSomeNumber = function (num) {
    return num + 20;
};
var result = addSomeNumber(20);
console.log(result); */
/* function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1=object1[propertyName];
        var value2 = object2[propertyName];
        if(value1<value2){
            return -1;
        }else if (value1>value2){
            return 1;
        }else{
            return 0;
        }
    };
}
var data = [{ name: 'Zachary', age: 4 }, { name: 'Nicholas', age: 9}];
data.sort(createComparisonFunction('name'));
console.log(data[0].name);

data.sort(createComparisonFunction('age'));
console.log(data[0].name); */
/* function sum(num1, num2) {
    return num1 + num2;
};
function callSum1(num1, num2) {
    return sum.apply(this, arguments);
};
function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
};

console.log(callSum1(10,10));
console.log(callSum2(10,10)); */
/* var name;
var likes=null;
console.log(name==likes); */

/* var a = { p: { x: 1 } }; var b = a.p;

delete a.p.x;
console.log(b.x); */


/* var Tom = new Object({ age: 30, height: 175 });
console.log(Tom.age);
var lily = Tom;
console.log(lily.age);
lily.sex = 'girl';
console.log(Tom);
 */
/* function addTen(num){
    num+=10;
    return num;
}
var count=20;
var result=addTen(count);
console.log(count);
console.log(result); */

/* function setName(obj) {
    obj.name = 'nike';
}
var person = new Object();
setName(person);
console.log(person.name);  */
/* var person = new Object();
var obj=new Object();
var person = obj;
obj.name = 'Tom';
var obj=new Object();
obj.name='lily';
console.log(obj);

console.log(person.name); */

/* 函数参数传递引用类型值时，person在经历函数调用之后，obj把指针复制一份给了person
之后作为局部变量的obj在函数内 */

/* var obj1 = {
    value: '111'
};
var obj2 = {
    value: '222'
};
function changeStuff(obj) {
    obj.value = '333';
    obj = obj2;
    return obj.value;
}
var foo = changeStuff(obj1);
console.log(foo);// '222' 参数obj指向了新的对象obj2
console.log(obj1.value);//'333' */
/*var v1 = []
var v2 = {};
var v3 = {};
function foo(v1, v2, v3) {
    v1[1]=3;
    v2.name='tom';
    v1 = [1];
    v2 = [2];
    v3 = { a: 3 }
}

foo(v1, v2, v3);
console.log(v1);
console.log(v2);
console.log(v3.a);
function palindrome(str) {
    var newStr=str.toLowerCase();
    var newerStr = newStr.replace(/[^a-z0-9]/g,"");
   var olderStr=newerStr.split("").reverse().join("");
    if(olderStr===newerStr);
       return true;
    };
  palindrome("eiy IE");
  
15
16
function palindrome(str) {
    if (str.length === 1) {
        return true;
    }
    var replacedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // 双指针 i 与 j，用来代表当前判断位置的索引
    for (var i = 0, j = replacedStr.length - 1; i < replacedStr.length / 2; i++,j--) {
        // 如果检测到了不相同
        if (replacedStr[i] !== replacedStr[j]) {
            // 直接跳出判断，返回 false
            return false
        }
    }
    // 所有的都判断完了，没有不相同的，返回 true
    return true;
}
  function palindrome(str) {
    var newStr=str.toLowerCase().replace(/[^a-z0-9]/g,"");
if(newStr.length<2){
    console.log(2);
    return true ;
}
   if (newStr[0]!==newStr[newStr.length-1]){
       return false;
   }
   return palindrome(newStr.slice(1,-1));
    };
  palindrome("eiy IE");
  
    }

    .reduce(function(x,y){return (x>y)?x:y;});
 

  function findLongestWord(str) {
     
    var newArr =  str.split(" ").map(function(x){
        return x.length;
    }).sort(function(a,b){
        return b-a;
    });
    console.log(newArr[0]);
        

     
     return newArr[0];
   }
   
   findLongestWord("The quick brown fox jumped over the lazy dog"); 
   
   
   function titleCase(str) {
    var newArr =str.split(" ");
    
   var  a=newArr.map(function(x){
      return   x.split("");
    });
    var b=a.map(function(x){
        return x.shift();
    });
    var c =b.map(function(x){
        return x.toUpperCase();
    });
  
    var f = a.map(function(x){
        return x.map(function(x){
            return x.toLowerCase();
        })
    });
    var e = f.map(function(x){
        return x.join("");
    });
    console.log(f);
    console.log(b);
    console.log(c);
    console.log(e);
    var d =[];
    for(i=0;i<a.length;i++){
          d.push(c[i]+e[i]);
    };
    console.log(d.join(" "));
  

   

    
  }
  
  titleCase("I'm a liTTle tea pot");  

  function largestOfFour(arr) {
    // 请把你的代码写在这里
    var b=[];
    for(i=0;i<arr.length;i++){
       b.push(arr[i].reduce(function(x,y){
        return  x>y?x:y;
      })) 
    }

console.log(b);
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  function confirmEnding(str, target) {
    // 请把你的代码写在这里
  var n = target.split("").length;
  console.log(n);
  var a = str.slice(str.length-n);
  console.log(a);
  if(a===str){
      return true;
  }else{
      return false;
  }
  }
  
  confirmEnding("Bastian", "tian");

  function repeat(str, num) {
    // 请把你的代码写在这里
    if(num<0){
      return [];
    }else{
        var a = [];
        for(i=0;i<num;i++){
            a.push(str);
        };
       console.log(a);
       console.log(a.length);


      };
    console.log(a.join(""));
  }
  
  repeat("abc", 10);*/
/*截断字符串

（用瑞兹来截断对面的退路）
 
如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
 
切记，插入到字符串尾部的三个点号也会计入字符串的长度。
 
但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
 
当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。
.split(' ').push("...")

function truncate(str, num) {
    // 请把你的代码写在这
    if(num<=3){
        if (str.length <= num) {
            return str;
        } else {
            var a = str.split("").slice(0, num);
            console.log(a);
            a.push("...");
            var b = a.join("");
            console.log(a);
            console.log(b);
            return b;
        }
    }else{
        if (str.length <= num) {
            return str;
        } else {
            var a = str.split("").slice(0, num-3);
            console.log(a);
            a.push("...");
            var b = a.join("");
            console.log(a);
            console.log(b);
            return b;
        }
    }
}

truncate("A-", 1) ;
把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];


function chunk(arr, size) {
    // 请把你的代码写在这里
    var a = arr.length / 2;
    console.log(Math.ceil(a));
    var newArr = [];
    for(i=0;i<arr.length/2;i++){
        newArr.push(arr.slice(size*i,size+size*i));
    }


    console.log(newArr);
    console.log(arr);
    return arr;
}

chunk(["a", "b", "c", "d", 3], 2);


返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。

function slasher(arr, howMany) {
    // 请把你的代码写在这里

    if (arr.length - howMany + 1 <= 0) {
        console.log([]);
        return [];
    }
    else if (arr.length - howMany + 1 <= arr.length) {
        var a = arr.slice(-(arr.length - howMany ));
        console.log(a);
    }
    else {
        console.log(arr);
        return arr;
    }
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)


function mutation(arr) {
    // 请把你的代码写在这里
    var a = arr[0].toLowerCase().split("");
    var b = arr[1].toLowerCase().split("");
    console.log(a);
    console.log(b);
    return b.every(function(x){
        console.log(a.indexOf(x)>=0);
        return a.indexOf(x)>=0;
    });
   
  }
mutation(["hello", "Hello"]);


function bouncer(arr) {
    // 请把你的代码写在这里
    console.log(null==undefined);
  var a = arr.filter(function(x){
     return x ;
    });
    console.log(a);
   
  }
  
  bouncer([false, null, 0, NaN, undefined, ""])

  实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。*/


function destroyer(arr) {
    // 请把你的代码写在这里
    console.log(typeof(arguments));
    var b = arguments.filter(function(x){
        return x!=arguments[1];
    })
    console.log(b);
    arguments.filter(function (x) {
        return
    })

    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


