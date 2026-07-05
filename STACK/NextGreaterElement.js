function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i += 1) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

// Example usage:
const arr = [4, 5, 2, 25];
console.log(nextGreaterElement(arr)); // [5, 25, 25, -1]

module.exports = nextGreaterElement;
