/* 

function name() {
    let count = 1000;
    try {
        if (count < 100) {
            throw new Error('woo,cuowule')
        } else {
            //work well
        }
    } catch (e) {
        console.log(e);

    }
}
function name() {
    console.log(123);

}
name();
 */
/* 
看答案之前先通过自己查阅资料所得回答下理解：<br/>
- 我觉得两种写法第二种<code>throw new Error(message)</code>更好
- 理由是第二种给了我们一个错误的对象，我们可以拿到这个对象进行进一步的
操作，无论是会对用户还是我们自己查看错误信息
- 如果throw 一个字符串，没法进一步进行操作
*** 但是我执行的时候怎么一直没有给我错误提示啊，浏览器执行说是
undefined，node中执行没结果
*/

let count = 100;
try {
    if (count < 100) {
        throw "哇喔，错误了";
    } else {
        // work well.
    }
} catch (e) {
    console.log(e);
}