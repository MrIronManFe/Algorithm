/*
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。



示例 1：
输入：target = 9
输出：[[2,3,4],[4,5]]

示例 2：
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]

限制：
1 <= target <= 10^5
*/

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    // 滑动窗口
    let left = 1,
        right = 1,
        sum = 0,
        res = []
    half = (target % 2 === 0) ? target / 2 : Math.ceil(target / 2)
        // console.log(half)
    while (left < half) {
        // console.log('sum=', sum)
        if (sum < target) {
            sum += right
            right++
            // console.log('right=', right)
        } else if (sum > target) {
            sum -= left
            left++
            // console.log('left=', left)
        } else if (sum === target) {
            let tmp = []
            for (let i = left; i < right; i++) {
                tmp.push(i)
            }
            res.push(arr)
            sum -= left
            left++
        }
    }
    return res
};

console.log(findContinuousSequence(9))