装饰器
=====

- 关注点分离 附带额外的信息
- 元数据 描述数据的数据
- 本身就是一个函数

语法
====
- 类装饰器
  - ``` 
        // 类装饰器函数只能返回void或者一个新的class
        // 类型约束传入的唯一参数为构造函数
        type constructor = new (...args:any[]) => object
        函数（constructor）
        {
            // TODO
        }
        

        @函数
        class A {}
    ```