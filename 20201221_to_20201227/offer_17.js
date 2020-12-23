/*
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]


说明：
用返回一个整数列表来代替打印
n 为正整数

*/

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    // let max = ""
    // while (n > 0) {
    //     max += '9'
    //     n--
    // }
    let max = Math.pow(10, n) - 1
    let arr = []
    for (let index = 1; index <= parseInt(max, 10); index++) {
        // console.log(index)
        arr.push(index)
    }
    return arr
};

console.log(printNumbers(1))
// console.log(printNumbers(2))
// console.log(printNumbers(3))