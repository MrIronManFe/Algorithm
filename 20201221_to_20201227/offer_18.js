/*

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

示例 2:
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 
说明：
题目保证链表中节点的值互不相同
若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点
。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head.val == val) {
        return head.next
    }
    /**
     * 假设【1，2，3】，目标值是2
     * 当前head是1.
     * 本来head.next是2,但是调用deletenode函数的时候刚刚好2==2,把2（head）的下一个值3的指针返回回去
     * 所以head.next = 3
     * 1->3
     * 
    */
    head.next = deleteNode(head.next, val);
    return head
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/*
定义一个哨兵变量，它的next指向head.
然后把pre赋值给node，然后操作node，但是因为是引用传递，所以实际上node操作的会引向哨兵变量的next里面的内容
所以最后，只要返回哨兵变量的next，也就是已经删除修改过后的head，就完成了
*/
var deleteNode = function (head, val) {
    let pre = new ListNode(-1); // 哨兵节点
    pre.next = head;
    let node = pre;
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
            break;
        }
        node = node.next;
    }
    return pre.next;
};

