interface IFunc { // 接口表示类成员可能会拥有的能力
    dance(): void
}

abstract class Animal { // 抽象类表示某些类的共同的抽象性质属性
    public abstract name: string
    public abstract sayHello(): void
}

class Dog extends Animal implements IFunc {

    [name: string]: any // 索引器的类型检查 （动态添加类的实例成员时的一种约束）

    public name: string = 'Dog'

    static readonly type = 'dog' // 静态属性 只属于该类 并不属于类的对象

    sayHello() {

    }
    dance() {

    }
}

const dog = new Dog()
dog['a'] = 1

console.log(Dog.type)