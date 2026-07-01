//Solution 1

class Solution {
    missingNumber(nums) {
        const seen = new Set();

        for (const num of nums) {
            seen.add(num);
        }

        const n = nums.length;

        for (let i = 0; i <= n; i++) {
            if (!seen.has(i)) {
                return i;
            }
        }

        return -1;
    }
}

// Driver code
const nums = [3, 0, 1];
const sol = new Solution();

console.log(sol.missingNumber(nums));
