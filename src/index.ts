import { type } from "os"

// typeof
class User {
    name: string
    age: number
    address: string
}
function createUser(cls: typeof User): User {
    return new cls()
}

const user = createUser(User)
user.name = 'bbj'

const u: typeof user = {
    name: 'bbu'
}


// keyof

interface t1 {
    prop: string
}

type t2 = User


function getSomething(str: keyof t1 | keyof t2 | keyof User) {
    console.log(str);
}


// in
// 通过已知的类型演算出一个新的类型
type readonly<T> = {
    readonly [p in keyof T]: T[p]
}