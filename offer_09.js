var CQueue = function() {
    this._queue_in = []
    this._queue_out = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this._queue_in.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this._queue_out.length > 0) {
        return this._queue_out.pop()
    } else if (this._queue_in.length === 0) {
        return -1
    } else {
        while (this._queue_in.length) {
            this._queue_out.push(this._queue_in.pop())
        }
        return this._queue_out.pop()
    }
};


var obj = new CQueue()
obj.appendTail(2)
obj.appendTail(3)
var param_2 = obj.deleteHead()
var param_3 = obj.deleteHead()
console.log(param_2, param_3, obj.deleteHead())


/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */