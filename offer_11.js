/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    // numbers.sort((a, b) => {
    //     return (a - b)
    // })
    // return numbers[0]
    // return Math.min(...numbers)
    let left = 0;
    let right = numbers.length - 1
    while (left !== right) {
        let mid = Math.floor(left + right / 2)
        console.log('mid=', mid)
        if (numbers[mid] < numbers[right]) {
            right = mid
        } else if (numbers[mid] > numbers[right]) {
            left = mid + 1
            console.log(`left=`, left)
        } else {
            right--
        }
    }

    return numbers[left]
};



console.log(minArray([3, 3, 3, 1]))