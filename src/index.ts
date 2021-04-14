import { Dictionary } from './Dictionary'

const dic = new Dictionary<string, number>()
dic.set('a', 1)
dic.set('b',2)
dic.forEach((k,v)=>console.log(`${k}:${v}`))
console.log(dic.size);
dic.delete('a')
dic.forEach((k,v)=>console.log(`${k}:${v}`))
console.log(dic.has('b'));
console.log(dic.has('a'));
