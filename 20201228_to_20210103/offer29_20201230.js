/*
示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

示例 2：
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]


限制：
0 <= matrix.length <= 100
0 <= matrix[i].length <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return matrix
    let rows = matrix.length
    let columns = matrix[0].length
    let res = []
    let index = 0
    let left = 0
    let right = columns - 1
    let top = 0
    let bottom = rows - 1
        // 整体循环跳出条件
    while (left <= right && top <= bottom) {
        // 从左到右
        for (let column = left; column <= right; column++) {
            res[index++] = matrix[top][column]
        }
        // 从上到下
        for (let row = top + 1; row <= bottom; row++) {
            res[index++] = matrix[row][right]
        }
        // 单行转方向条件
        if (left < right && top < bottom) {
            // 从右到左
            for (let column = right - 1; column > left; column--) {
                res[index++] = matrix[bottom][column]
            }
            // 从下到上
            for (let row = bottom; row > top; row--) {
                res[index++] = matrix[row][left]
            }
        }
        // 开始第二轮循环条件
        left++
        right--
        top++
        bottom--
    }
    return res
};