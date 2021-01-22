/*
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：
输入: s = "ab cdefg", k = 2
输出: "cdefg ab"

示例 2：
输入: s = "lrlose umgh", k = 6
输出: "umgh lrlose"
 

限制：
1 <= k < s.length <= 10000
*/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    // 切片
    // let tmp_str_font = s.slice(0, n)
    // let tmp_str_back = s.slice(n)
    // return tmp_str_back + tmp_str_font
    // 遍历
    // let res = []
    // for (let index = n; index < s.length; index++) {
    //     res.push(s[index])
    // }
    // for (let index = 0; index < n; index++) {
    //     res.push(s[index])
    // }
    // return res.join('')
    // 遍历字符串
    let res = ''
    for (let index = n; index < s.length; index++) {
        res += s[index]
    }
    for (let index = 0; index < n; index++) {
        res += s[index]
    }
    return res
};

console.log(reverseLeftWords("abcdefg", 2))
console.log(reverseLeftWords("lrloseumgh", 6))