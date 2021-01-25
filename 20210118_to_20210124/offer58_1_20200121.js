/*
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

示例 1：
输入: "the sky is blue"
输出: "blue is sky the"

示例 2：
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

示例 3：
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

说明：
无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 库函数
    // str = s.trim().split(' ').filter(item => item!='').reverse().join(' ')
    // let tmp_arr = s.split(' ').reverse()
    // let assist = []
    // for (let index = 0; index < tmp_arr.length; index++) {
    //     let string = tmp_arr[index]
    //     if (string !== '') {
    //         assist.push(string.trim())
    //     }
    // }
    // return assist.join(' ').trim()
    // 双指针
    s = s.trim()
    let res = [],
        left = right = s.length - 1
    while (left >= 0) {
        while (left >= 0 & s[left] != ' ') { left -= 1 }
        res.push(s.slice(left + 1, right + 1))
        while (s[left] == ' ') { left -= 1 }
        right = left
            // if (s[left] !== ' ' && s[left] !== undefined) {
            //     left--
            // } else {
            //     // console.log(left)
            //     if (right !== left) {
            //         let str = ''
            //         for (let index = left; index <= right; index++) {
            //             str += s[index]
            //         }
            //         tmp_arr.push(str)
            //         right = left
            //     } else {
            //         left--
            //     }
            // }
    }
    return res.join(' ')
};

console.log(reverseWords('I am a student.')) //student. a am I
console.log(reverseWords('the sky is blue')) //blue is sky the
console.log(reverseWords('  hello world!  ')) //world! hello
console.log(reverseWords('a good             example')) //example good a