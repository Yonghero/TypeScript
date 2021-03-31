
/**枚举特点 
 * 用户描述一个取值范围
 * 不混淆逻辑含义与真实值
 * 编译后为js对象可以可动态读取而定义别名则无法动态读取
 */

import { printPoker, createPoker } from "./funcs";


printPoker(createPoker())