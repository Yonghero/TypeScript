# interface : 用户约束类、对象、函数的一个契约（接口）
## 接口的理解： 前端开发中遇到新技术、或者忘记了某些功能，我们都会去找相应的官方接口文档查询 、 日常生活中比如type-c接口、usb接口，这些广泛的定义其实就是一个标准

+ interface 可以继承 *子接口不能覆盖父接口的成员*
  `interface a { t : number }  interface b extends { t1 : string} let val:b = {t:1,t1:"1"}`