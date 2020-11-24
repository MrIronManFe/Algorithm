// 剑指 Offer 03. 数组中重复的数字

// 找出数组中重复的数字。

// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 


/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法1，使用哈希表
// var findRepeatNumber = function(nums) {
//     let a = {}
//     let num
//     nums.forEach((item, index) => {
//         if (a[item] === undefined) {
//             a[item] = 1
//         } else {
//             num=item
//         }
//     })
//     return num
// };

// 方法2，使用自身哈希表
// 1. 和上面hash表一样，如果当前遍历的不等于当前的index，就把它放入对应的位置
// 2. 如果对应的位置上已经有了，那么当前遍历的就是答案
var findRepeatNumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        while (i != nums[i] && nums[nums[i]] != nums[i]) { // 将对应的数字，放入对应的坑位；并且坑位上也不是正确的数字
            var tmp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = tmp;
        }
        if (i !== nums[i] && nums[nums[i]] == nums[i]) return nums[i];
    }
};