/*

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 
提示：
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    // strs.sort((a, b) => { return a.length - b.length })
    let tmp_str = ''
    for (let char_index = 0; index < strs[0].length; index++) {
        const char = array[char_index];
        for (let strs_index = 1; strs_index < strs.length; strs_index++) {
            if (char !== strs[strs_index][char_index]) {
                return ''
            }
        }
        tmp_str += char
    }
    return tmp_str
};