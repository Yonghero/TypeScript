# ts中的模块化
· ts中使用ES6标准 编译结果也配置为ES6标准 那不会出现任何问题
· ts中使用ES6标准 编译结果配置为commonjs标准 编译后的文件采用的方式是声明了一个exports对象 将ts中使用ES6导出的模块 生成为exports中的一个属性 会出现的问题是ES6的默认导出 会生成为exports.default这个属性 例如node中fs模块是用commonjs标准写的 编译结果为 exports.default.fs 那必定是错误的 解决办法有 
import * as fs from 'fs' 
import {readFileSync} from 'fs'
但是！在tsconifg中也是可以配置的 `esModuleInterop`

