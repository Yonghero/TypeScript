import './practice'

// 类装饰器
type construcor = new (...args: any[]) => object
function d1(des: string) {
    return function (target: construcor) {
        new target()
        // console.log(des);

    }

}


@d1('这是一个类')
class A {
    constructor() {
        // console.log('I am A');
    }
}

// 成员装饰器

function des(target:any, key:string){
    // console.log(target,key);
    
}


function enumerable(target:any, key:string, des:object){
    // console.log(target,key,des);
    (des as any).enumerable = true
}

class B{
    @des
    prop1:string;


    @enumerable
    method(){

    }
}

// const b = new B()
// for (const key in b) {
//     console.log(key);
// }

