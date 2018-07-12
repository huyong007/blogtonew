# what`s the meaning of destructuring assignment?
- MDN:The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

# Attribute
- 如果重构不成功，那么左边的无对应值的变量就成为了undefined
- 如果distinct variable不是可以遍历的或称为具备Iterator接口，会报错,Error:TypeError: false is not iterable
- 数组的重构有元素的次序排列决定，对象重构无持续要求，变量必须和属性同名才能取到正确值
- 对象重构过程中如果没有属性同名则为undefined
- 在对象的重构中，模式和变量可以相互切换
```javascript
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
line // 1
loc  // Object {start: Object}
start // Object {line: 1, column: 5}
```
- 3.字符串的解构赋值