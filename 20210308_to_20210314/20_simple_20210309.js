/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。


示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true


提示：
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成

*/

/**
 * @param {string} 
 * @return {boolean}
 */
var isValid = function (s) {
    // 不是双数可以退出
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    let tmp_arr = []
    let map = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    for (let index = 0; index < s.length; index++) {
        const value = s[index];
        if (value === '(' || value === '[' || value === '{') {
            tmp_arr.push(value)
        } else {
            let key = map[value]
            if (tmp_arr[tmp_arr.length - 1] !== key) {
                return false
            } else {
                tmp_arr.pop()
            }
        }
    }
    return tmp_arr.length === 0
};