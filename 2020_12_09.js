
/*
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
示例 1：
输入：m = 2, n = 3, k = 1
输出：3

示例 2：
输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    // 初始化矩阵
    let init_arr = []
    // 把没有访问过的矩阵标记为false
    for (let row_index = 0; row_index < m; row_index++) {
        init_arr[row_index] = [];
        for (let column_index = 0; column_index < n; column_index++) {
            init_arr[row_index][column_index] = false
        }
    }

    // 定义深度优先函数
    let dfs = function (row_index, column_index, init_arr, k) {
        // 理所当然需要判断边界条件，因为大神们已经分析过实际上只要向下向右走就可以了，所以不会出现小于0的情况，所以就没有i<0,和j<0的判断条件了
        if (row_index >= m || column_index >= n || init_arr[row_index][column_index] || isOk(row_index, column_index, k)) {
            // 为啥子因为要return 0呢，因为走不通啊，不能再走了啊，所以是0
            return 0
        }
        // 走到这一步证明机器人当前是可以走的，设置当前位置为已经访问过
        init_arr[row_index][column_index] = true
        // 因为这个格子可以走，所以返回的时候需要把自己加上，就是这个1，然后就是遍历了
        return 1 + dfs(row_index + 1, column_index, init_arr, k) + dfs(row_index, column_index + 1, init_arr, k)
    }
    // 计算数位和函数
    let isOk = function (row_index, column_index, k) {
        if (Math.floor(row_index / 10) + row_index % 10 + Math.floor(column_index / 10) + column_index % 10 > k) {
            return true
        } else {
            return false
        }
    }
    // 从0，0开始
    return dfs(0, 0, init_arr, k)
};