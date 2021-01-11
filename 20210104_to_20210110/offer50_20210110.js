/*
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:
s = "abaccdeff"
返回 "b"

s = "" 
返回 " "

限制：
0 <= s 的长度 <= 50000
*/

/**
 * @param {string} s
 * @return {character}
 */
// 哈希表
var firstUniqChar = function (s) {
    let map = new Map()
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (!map.has(element)) {
            map.set(element, true)
        }
        else {
            map.set(element, false)
        }
    }
    for (var [key, value] of map) {
        if (value) {
            return key
        }
    }
    return ' '
};
// console.log(firstUniqChar("leetcode"))
// console.log(firstUniqChar("aadadaad"))