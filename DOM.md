#DOM
- 最近看了JavaScript DOM编程艺术这本书的DOM章节，下面就总结下DOM这个章节关于DOM的知识点
  - HTML是个树结构，其中涉及到的概念有：节点node，元素节点element node ,文本节点text node，属性节点attribute node
  - 涉及到的方法有五个：getElementById()/getElementByTagName()/getElementByClassName()/getAttribute()/setAttribute()
  - 这些方法中前三种是document的方法，返回的都是一个对象，其中第一个返回一个特定的元素对象，后两个返回一个对象数组，第三个在应用的时候需要注意浏览器的兼容性
  - 后两种是元素节点的方法
  - getElementById()得到的是一个文本中仅有的一个包含某个Id属性值得元素
  - getElementByTagName()/getElementByClassName()得到是一个元素数组结果，当然我们可以使用数组的特性再进行方法操作，其中这个方法的参数可以是一个list，在匹配值时参数没有先后循序的限制
  - getAttribute()/setAttribute()两个方法元素的某个属性的属性值，并进行相应属性值的设置