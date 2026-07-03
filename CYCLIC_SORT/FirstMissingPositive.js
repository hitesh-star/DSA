function firstMissingPositive(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[i] !== nums[correctIndex]
        ) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) {
            return j + 1;
        }
    }

    return nums.length + 1;
}

// Example usage:
const nums = [3, 4, -1, 1];
console.log(firstMissingPositive(nums));

module.exports = firstMissingPositive;
