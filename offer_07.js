// 剑指 Offer 07. 重建二叉树
// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。



// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7


// 限制：
// 0 <= 节点个数 <= 5000

// 前序，根-左-右
// 中序，左-根-右
// 根据前序找到根节点
// 通过找到根节点在中序中的位置，确定中序的左节点为(inorder.slice(0,index)),右节点为(inorder.slice(index+1))
// 以此类推,确定前序的左节点为(preorder.slice(1,index+1)),右节点为(preorder.slice(index+1)),如果不清楚,可以自己构造一个简单的例子用最笨的办法数就好了
// 然后循环,注意跳出循环的条件


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    let root = preorder[0]
    let node = new TreeNode(root)
    let index = inorder.indexOf(root)
    node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
    return node
};