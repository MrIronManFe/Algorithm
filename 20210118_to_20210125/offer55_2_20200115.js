/*
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

示例 1:
给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

限制：
1 <= 树的结点个数 <= 10000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // dfs
    /*
        function dfs(root) {
        if (root === null) return 0
        return 1 + Math.max(dfs(root.left), dfs(root.right))
    }
    if (root === null) return true
    let left = dfs(root.left)
    let right = dfs(root.right)
    if (Math.abs(right - left) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
    */

    // bfs

};