interface condition {  // 此接口约束了一个函数 参数必须为number 返回值必须为boolean
    (n: number): boolean
}

function sum(nums: number[], callback: condition): number {
    let val = 0
    nums.forEach(n => {
        if (callback(n)) {
            val += n
        }
    })
    return val
}

console.log(sum([1, 2, 3, 4, 5], n => (n % 2 === 0)));
