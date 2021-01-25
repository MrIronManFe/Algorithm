/*从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

示例 1:
输入: [1,2,3,4,5]
输出: True

示例 2:
输入: [0,0,1,2,5]
输出: True

限制：
数组长度为 5
数组的数取值为 [0, 13] .
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    // 先将 nums 从小到大进行排序，再把数组中的 0 去掉
    nums = nums.sort((a, b) => a - b).filter(item => item !== 0)
    // 找出数组中的最大数与最小数，分别在数组的头和尾，判断它们的差是否超过 4，超过则说明不是连续的
    if (nums[nums.length - 1] - nums[0] > 4) return false

    // 遍历数组找出是否有重复的数字，因为涉及到 i + 1，所以遍历长度是 数组长度-1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return false
    }
    return true
};
