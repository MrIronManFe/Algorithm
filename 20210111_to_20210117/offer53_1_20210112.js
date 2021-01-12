/*
统计一个数字在排序数组中出现的次数。

示例 1:
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

示例 2:
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0

限制：
0 <= 数组长度 <= 50000
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // let left = nums.indexOf(target)
    // let right = nums.lastIndexOf(target)
    // return right - left + 1
    function help(target) {
        let i = 0,
            j = nums.length - 1
        while (i <= j) {
            let m = Math.floor((i + j) / 2);
            (nums[m] <= target) ? i = m + 1 : j = m - 1
        }
        return i
    }
    return help(target) - help(target - 1)
};