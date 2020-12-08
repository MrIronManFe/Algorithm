/*
1.算法题
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
提示：

1 <= board.length <= 200
1 <= board[i].length <= 200
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var row = board.length;
    var col = board[0].length;

    var dfs = function (i, j, board, word, index) {
        // 此语句主要用于4个方向上右下左的越界条件判断
        if (i < 0 || i >= row || j < 0 || j > col || board[i][j] !== word[index]) return false; // 判断不符合条件
        if (index === word.length - 1) return true;  // word遍历完了
        var tmp = board[i][j];  // 记录到board的值
        board[i][j] = '-'      // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
        // 判断四个方向是否有其中一个方向符合条件，记录答案
        var res = dfs(i - 1, j, board, word, index + 1) || dfs(i + 1, j, board, word, index + 1) || dfs(i, j - 1, board, word, index + 1) || dfs(i, j + 1, board, word, index + 1);
        // 因为之前锁定了，万一有其中一步不行，就要返回重新计算了，所以需要回复现场
        board[i][j] = tmp;   // 恢复现场
        return res;

    }
    // 遍历整个board，找到初始位置点
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            // 遍历第一行第一列，换成第一行第二列继续判断，但凡返回一个true，就true了
            if (dfs(i, j, board, word, 0)) {
                return true;
            }
        }
    }
    // 没找到
    return false
};

// 2.面试题
// 求二维数组的全排列组合
// var arr = [
//     ['A','B'],
//     ['a','b'],
//     [1,2]
// ]
// 结果：Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2