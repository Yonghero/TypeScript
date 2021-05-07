# 类型演算

## 三个关键字
1. __typeof__
-  通常用于类型约束的位置上 可以得到对应的类型
-  作用在类上时, 得到的类型为该类的构造函数
---------
2. __keyof__
-  可以获取接口、类、类型别名 获取全部对应类型的属性名
---------
1. __in__
- 通常和keyof连用 限制索引器的取值范围
  
## TS中预设的类型演算
  *从别的类型中推算出新的类型 也是类型约束的一种*
  ```ts
  Parital<T>
  Required<T>
  Readonly<T>
  Exclude<T,U>
  Extract<T,U>
  NonNullable<T>
  ReturnType<T>
  InstanceType<T>
  ```