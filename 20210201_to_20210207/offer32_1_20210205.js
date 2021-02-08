/*
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：
[3,9,20,15,7]

提示：
节点总数 <= 1000

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
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let queue = [root];
    let res = []
        // console.dir(queue)
        // console.log()
    while (queue.length !== 0) {
        // console.log('----')
        let tmp_queue = []
        for (let index = 0; index < queue.length; index++) {
            let node = queue[index]
                // console.dir(node)
            res.push(node.val)
            if (node.left) tmp_queue.push(node.left)
            if (node.right) tmp_queue.push(node.right)
        }
        queue = tmp_queue;
    }
    return res
};