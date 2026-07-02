
// LeetCode 645. Set Mismatch - Cyclic Sort solution
// Given an array nums containing n numbers taken from the range [1, n].
// One number is duplicated and one number is missing. Return [duplicate, missing].

function findErrorNums(nums) {
	const n = nums.length;
	let i = 0;

	// Cyclic sort: place each number at its correct index (num-1)
	while (i < n) {
		const correct = nums[i] - 1;
		if (nums[i] !== nums[correct]) {
			// swap nums[i] and nums[correct]
			[nums[i], nums[correct]] = [nums[correct], nums[i]];
		} else {
			i++;
		}
	}

	// After sorting, the first place where nums[i] !== i+1 gives the duplicate and missing
	for (let j = 0; j < n; j++) {
		if (nums[j] !== j + 1) {
			return [nums[j], j + 1];
		}
	}

	return [-1, -1];
}

// Export for Node.js use
if (typeof module !== 'undefined' && module.exports) {
	module.exports = findErrorNums;
}

// Example usage (uncomment to test):
console.log(findErrorNums([1,2,2,4])); // [2,3]
