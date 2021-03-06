/*
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2

给定的树 B：

   4 
  /
 1

返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：
输入：A = [1,2,3], B = [3,1]
输出：false

示例 2：
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
限制：
0 <= 节点个数 <= 10000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    // 题目约定：约定空树不是任意一个树的子结构
    if (!A || !B) {
        return false
    }
    // 涵盖根节点，B在A的左子树，B在A的右子树
    return isSub(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

function isSub(A, B) {
    // B树遍历完了，说明B是A的子结构
    if (!B) return true;
    // A遍历完了，但是B还没有遍历完，那么B肯定不是A的子结构。
    // 当让值不一样就肯定是不一样了啊
    if (!A || A.val !== B.val) return false;
    // 然后再遍历左子树和右子树
    return isSub(A.left, B.left) && isSub(A.right, B.right)
}

// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/di-gui-fang-shi-jie-jue-by-sdwwld/
// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/tu-jie-di-gui-javascriptshi-xian-by-xin-tan/