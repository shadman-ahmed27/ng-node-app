/*You are given an integer array height of length n. There are n vertical lines 
drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). 
Find two lines that together with the x-axis form a container, such that the 
container contains the most water. Return the maximum amount of water a container 
can store. Notice: that you may not slant the container. */

function maxArea() {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Calculate area between left and right
    const width = right - left;
    const currentWater = Math.min(height[left], height[right]) * width;

    // update max water if current is greater
    maxWater = Math.max(maxWater, currentWater);

    // Move the pointer with smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". */

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; // Handle empty input

  let prefix = strs[0]; // Assume the first string as the prefix

  for (let i = 1; i < strs.length; i++) {
    // Check the prefix against each string
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix until it matches the start of the string
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return ""; // No common prefix
    }
  }

  return prefix;
}
