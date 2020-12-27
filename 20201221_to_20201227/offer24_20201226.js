/*
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 
限制：
0 <= 节点个数 <= 5000
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 双指针
    // 理解不了画图好吗baby
    // if (!head || !head.next) return head;
    // let pre = null
    // let cur = head
    // while (cur) {
    //     const next = cur.next
    //     cur.next = pre
    //     pre = cur
    //     cur = next
    // }
    // return pre
    // 递归，其实就是重新定义一个函数，head传进去，到了最后，再反转
    // 题解已经很清楚了，用心看
    if (head === null || head.next === null) {
        return head
    }
    function recur(cur, pre) {
        if (!cur) {
            return pre
        }
        res = recur(cur.next, cur)
        cur.next = pre
        return res
    }
    return recur(head, null)
};