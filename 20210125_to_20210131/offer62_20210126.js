/*
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。
例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 
示例 1：
输入: n = 5, m = 3
输出: 3

示例 2：
输入: n = 10, m = 17
输出: 2

限制：
1 <= n <= 10^5
1 <= m <= 10^6

*/

/*
大体思路：

n个人编号0,1,2,...,n-1，每数m次删掉一个人
假设有函数f(n)表示n个人最终剩下人的编号
n个人删掉1个人后可以看做n-1的状态，不过有自己的编号。
n个人删掉的第一个人的编号是(m-1)%n，那么n个人时删掉第一个人的后面那个人(m-1+1)%n一定是n-1个人时候编号为0的那个人，即n个人时的编号m%n（这个编号是对于n个人来考虑的），n-1个人时编号为i的人就是n个人时(m+i)%n
所以f(n)=(m+f(n-1))%n
f(1)=0，因为1个人时只有一个编号0。
因此可以将人数从2反推到n：
*/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let ans = 0;
    for (let i = 2; i <= n; i++) {
        ans = (ans + m) % i;
    }
    return ans;
};

// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/huan-ge-jiao-du-ju-li-jie-jue-yue-se-fu-huan-by-as/