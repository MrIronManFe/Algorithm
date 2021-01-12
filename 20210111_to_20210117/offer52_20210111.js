/*
输入两个链表，找出它们的第一个公共节点。
注意：

如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/*
我们使用两个指针 node1，node2 分别指向两个链表 headA，headB 的头结点，然后同时分别逐结点遍历，当 node1 到达链表 headA 的末尾时，重新定位到链表 headB 的头结点；当 node2 到达链表 headB 的末尾时，重新定位到链表 headA 的头结点。

这样，当它们相遇时，所指向的结点就是第一个公共结点。
nodeA = l1+c
nodeB = l2+c
l1+c+l2 = l2+c+l1
*/
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA,
        nodeB = headB
    while (nodeA !== nodeB) {
        nodeA = (nodeA) ? nodeA.next : headB
        nodeB = (nodeB) ? nodeB.next : headA
    }
    return nodeA
};