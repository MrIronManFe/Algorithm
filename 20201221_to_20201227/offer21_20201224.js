/*
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

示例：
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 

提示：
1 <= nums.length <= 50000
1 <= nums[i] <= 10000

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var exchange = function (nums) {
//     let odd = []
//     let even = []
//     for (let index = 0; index < nums.length; index++) {
//         const element = nums[index];
//         (element % 2 === 0) ? even.push(element) : odd.push(element)
//     }
//     return [...odd, ...even]
// };

// 双指针

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    //双指针，从两侧寻找
    let i = 0, j = nums.length - 1
    while (i < j) {
        if (nums[i] % 2) i++;//找到第一个偶数
        if (nums[j] % 2 == 0) j--;//找到奇数
        if (i < j) {
            // 当两个指针不重合的时候，交换元素
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    return nums
};