/*
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]

解释:

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


提示：
你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (k === 1) return nums
    let res = []
    let left = 0;
    while (left + 2 <= nums.length) {
        let tmp_arr = nums.slice(left, left + k)
        // console.log(tmp_arr)
        res.push(Math.max(...tmp_arr))
        left++
    }
    return res
};
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 1))
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))