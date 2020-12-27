// 简单桶排，创建拥有n个元素的数组，数组元素>1，证明出现过
let arr = [123, 12, 4, 3, 345, 34, 534, 5, 345, 34, 53]
function sort_one(arr) {
    // 注意n+1个数组
    let bucket = new Array(Math.max(...arr) + 1).fill(0)
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        bucket[element] += 1
    }
    let sort_arr = []
    // 查找不去重
    // console.log(bucket[bucket.length - 1])
    for (let outer_index = 0; outer_index < bucket.length; outer_index++) {
        const element = bucket[outer_index];
        if (element) {
            for (let inner_index = 0; inner_index < element; inner_index++) {
                sort_arr.push(outer_index)
            }
        }
    }
    // 查找并且去重
    // bucket.map((item, index) => {
    //     if (item) {
    //         sort_arr.push(index)
    //     }
    // })
    return sort_arr
}

// 冒泡，第二层循环不断和隔壁对比
function sort_two(arr) {
    for (let outer_index = 0; outer_index < arr.length; outer_index++) {
        for (let inner_index = 0; inner_index < arr.length - outer_index; inner_index++) {
            if (arr[inner_index] > arr[inner_index + 1]) {
                [arr[inner_index], arr[inner_index + 1]] = [arr[inner_index + 1], arr[inner_index]]
            }
        }
    }
    return arr
}
// 快排，左右双指针
// 重点在于指针的操作
// 先右面，找到小于base的数字了，然后左面，找到大于base的数，交换。
// 然后i=j，交换base，然后就左边左边排，右边右边排，然后返回，美滋滋
function sort_three(arr) {
    function help(left, right) {
        if (left > right) {
            return
        }
        let l = left
        let r = right
        let base = arr[left]
        while (l !== r) {
            while (arr[l] >= base && l < r) {
                r--
            }
            while (arr[l] <= base && l < r) {
                l--
            }
            if (l < r) {
                [arr[l], arr[r]] = [arr[r], arr[l]]
            }
        }
        [base, arr[l]] = [arr[l], base]
        help(left, l - 1)
        help(l + 1, right)
    }
    help(0, arr.length - 1)
    return arr
}


console.log(sort_one(arr))
console.log(sort_two(arr))
console.log(sort_three(arr))