// 剑指 Offer 05. 替换空格
/**
 * @param {string}
 * @return {string}
 */

// 暴力循环
var replaceSpace = function(s) {
    let tmp_str = ''
    for (let index = 0; index < s.length; index++) {
        tmp_str += s[index] === ' ' ? '%20' : s[index]
        console.log(tmp_str)
    }
    return tmp_str
};

// 正则
var replaceSpace = function(s) {
    return s.replace(/ /g, '%20')
};

// 数组方法
var replaceSpace = function(s) {
    return s.split(' ').join('%20')
};

console.log(replaceSpace('We are happy.'))