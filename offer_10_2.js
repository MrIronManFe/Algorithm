/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if (n == 0) return 1
    if (n == 1) return 1
    let a = b = 1
    let res = 0
    for (let step = 2; step <= n; step++) {
        res = (a + b) % 1000000007;
        [a, b] = [b, (a + b) % 1000000007]
    }
    return res
};

console.log(numWays(78))