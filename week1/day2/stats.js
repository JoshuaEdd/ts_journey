/* Write three functions that each take an array of numbers:

findMax(numbers)
findMin(numbers)
findAverage(numbers)

Rules: no Math.max, no Math.min, no reduce.Loop manually.You will be allowed the shortcuts from day 4 onward, but today the point is to control the loop yourself.

For findMax, the pattern is: assume the first element is the winner, then walk the rest and replace the winner whenever you find something bigger. */

function findMax(nums) {
    maxNum = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        } else {
            if (i < maxNum);
            continue
        }
    }
    return maxNum
}



function findMin(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        } else {
            if (nums[i] > min);
            continue
        }
    }
    return min
}

function findAverage(nums) {
    sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    ave = sum / nums.length;

    return ave
}


const nums = [12, 5, 88, 3, 45, 88, -7];
console.log(findMax(nums));
console.log(findMin(nums));
console.log(findAverage(nums))