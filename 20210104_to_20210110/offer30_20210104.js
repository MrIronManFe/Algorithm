// /*
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

// 示例:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.

// 提示：

// 各函数的调用总次数不超过 20000 次
// 方法2，辅助栈

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.main_stack = []
    this.help_stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.main_stack.push(x)
    // console.log(this.help_stack[this.help_stack.length - 1])
    if (this.help_stack.length === 0) {
        this.help_stack.push(x)
    } else if (this.help_stack[this.help_stack.length - 1] >= x) {
        this.help_stack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let element = this.main_stack.pop()
    if (element === this.help_stack[this.help_stack.length - 1]) {
        this.help_stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.main_stack[this.main_stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    // console.log(this.help_stack)
    return this.help_stack[this.help_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

// */

// /**
//  * initialize your data structure here.
//  */
// var MinStack = function () {
//     this.stack = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//     this.stack.push(x)
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     this.stack.pop()
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     return this.stack[this.stack.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.min = function () {
//     return Math.min(...this.stack)
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.min()
//  */