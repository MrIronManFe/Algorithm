/*
实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3

示例 1：
输入：root = [1,2,2,3,4,4,3]
输出：true

示例 2：
输入：root = [1,2,2,null,3,null,3]
输出：false

限制：

0 <= 节点个数 <= 1000

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
var isSymmetric = function (root) {
    function isMirror(r1, r2) {
        //如果都为null 对称
        if (!r1 && !r2) {
            return true
        }
        //只要其中一个为空，另一个不为，则不对称
        if (!r1 || !r2) {
            return false
        }
        //判断根节点
        //判断r1的左树和r2的右
        //判断r2的左树和r1的右
        return r1.val == r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left)
    }

    return isMirror(root, root)
};
