import 'reflect-metadata'
/**
 * 打印出类的相关信息
 */

export const classDes = (des: string) => {
    return (target: new (...args: any[]) => object) => {
            target.prototype.$classDes = des ? des : Object.getPrototypeOf(target).constructor.name
        
    }
}



export const classProp = (des: string) => {
    return (target: any, key: string) => {
        if (!target.$propCollection) {
            target.$propCollection = []
        }
        target.$propCollection.push({
            prop: key,
            des
        })
    }
}

export const printF = (object: any) => {
    if (!(object.$classDes || object.$propCollection)) {
        return 'No description'
    }

    console.log(object.$classDes);
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {

            const propDes = object.$propCollection.find((prop:any)=> prop.prop === key).des
            console.log(`${key}:${propDes}`);
            
        }
    }

}

function description(){

}


const key = Symbol('descirbe')
@Reflect.metadata(key,'用户类')
class User {
    @Reflect.metadata(key,'姓名')
    name: string
    @Reflect.metadata(key,'年龄')
    age: number

}

const u = new User()
u.name = 'bbj'
u.age = 18
console.log(Reflect.getOwnMetadata(key,User));
for (const k in u) {
    if (Object.prototype.hasOwnProperty.call(u, k)) {
        console.log(Reflect.getMetadata(key,u,k));
    }
}



