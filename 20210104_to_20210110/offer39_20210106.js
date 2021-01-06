/*
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
 
限制：
1 <= 数组长度 <= 50000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 方法一，哈希表
    // let obj = {}
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     (obj[element]) ? obj[element] += 1 : obj[element] = 1
    // }
    // let half = Math.ceil(nums.length / 2)
    // for (const key in object) {
    //     if(Object[key] >= half){
    //         return Object[key]
    //     }
    // }
    // 方法二,摩尔投票法
    // let res = 1, major = nums[0]
    // for (let index = 1; index < nums.length; index++) {
    //     const element = nums[index];
    //     if (res === 0) {
    //         major = element
    //     }
    //     (major === element) ? res++ : res--
    // }
    // return major
    // 方法3，排序返回中间数
    // return nums.sort((a, b) => { return a - b })[Math.floor(nums.length / 2)]
};