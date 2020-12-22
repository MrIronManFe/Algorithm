/*
实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。

示例 1:
输入: 2.00000, 10
输出: 1024.00000

示例 2:
输入: 2.10000, 3
输出: 9.26100

示例 3:
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25

说明:
-100.0 < x < 100.0

n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1
    }
    if (n < 0) {
        n = -n;
        x = 1 / x
    }
    return (n % 2 === 0) ? myPow(x * x, n / 2) : x * myPow(x * x, Math.floor(n / 2))
};
// var myPow = function (x, n) {
//     // 处理负数
//     if (n == 0) return 1
//     if (n % 2 === 0) {
//         return myPow(x * x, n / 2)
//     } else {
//         return myPow(x * x, parseInt(n / 2)) * x
//     }

// };

// console.log(myPow(2.00000, 10))
// console.log(myPow(2, 1))
console.log(myPow(2.00000, 2))
// console.log(myPow(2.00000, -2))
// console.log(myPow(2.00000, -2))
// console.log(myPow(2.00000, 0))