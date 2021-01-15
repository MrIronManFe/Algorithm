/*
输入一棵二叉树的根节点，求该树的深度。
从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
例如：
给定二叉树 [3,9,20,null,null,15,7]，
    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

提示：
节点总数 <= 10000
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
 * @return {number}
 */
// dfs深度优先
// 返回左右子树最深的一边，再加上自己的高度
const maxDepth = (root) => {
    // 1. 如果没下一层了，返回 0
    if (!root) {
        return 0;
    }
    // 2. 返回左右子树中最深的那一层
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
// bfs广度优先
const maxDepth = (root) => {
    // 狗不理
    if (!root) {
        return 0;
    }

    // 1. 设置深度为 0
    let depth = 0;

    // 2. 每层遍历
    let bfs = [root];

    // 3. 逐层访问树
    while (bfs.length) {
        // 3.1 每次遍历，深度 + 1
        depth++;

        // 3.2 设置下一次需要遍历的节点
        const tempBfs = [];

        // 3.3 遍历本次所有节点，将有内容的都添加进来
        for (let i = 0; i < bfs.length; i++) {
            if (bfs[i].left) {
                tempBfs.push(bfs[i].left);
            }
            if (bfs[i].right) {
                tempBfs.push(bfs[i].right);
            }
        }

        // 3.4 交接 tempBfs 到 bfs 上
        bfs = tempBfs;
    }

    // 4. 返回深度
    return depth;
};