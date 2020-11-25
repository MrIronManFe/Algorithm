/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 思路，使用栈
// 反转数组
var reversePrint = function(head) {
    let tmp_arr = []
    while (head) {
        tmp_arr.push(head.val)
        head = head.next
    }
    return tmp_arr.reverse()
};

// console.log(reversePrint([1, 3, 2]))