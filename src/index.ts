// 类型别名
type User = {
    name: string
    age: number
}
let u: User = {
    name: 'xx',
    age: 34
}

function getUser(): User[] {
    return [u]
}
console.log(getUser())

function test(): void | never {

}