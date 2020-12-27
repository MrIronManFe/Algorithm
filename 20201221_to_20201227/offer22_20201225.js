
/*
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

示例：
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    // 暴力解，垃圾
    // let dp = [];
    // let count = 0;
    // while(head.next){
    //     dp[count]=head
    //     head=head.next
    //     count++
    // }
    // return dp[k]
    // for (let index = 0; index < k; index++) {
    //     const element = array[index];
    // }

    // 双指针
    // 思路是啥，先让前面的指针走k步，然后一起走，会发现实际上就是返回back，画图好吗不懂
    // 假设是[1,2,3,4,5],k=2
    // font指针走2步，到2
    // 指针一起走开始，知道font=null
    // 手牵手一步两步三步四步看星星
    // font:3,4,5,null
    // back:1,2,3,4
    let font = back = head
    let n = 0
    while (n < k) {
        font = font.next
        n++
    }
    while (font) {
        font = font.next//3,4,5,null
        back = back.next//1,2,3,4
    }
    return back
};

