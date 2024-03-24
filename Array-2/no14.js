// Array-2 -- no14

// Given an array of ints, return true if it contains no 1's or it contains no 4's.

// Examples

// no14([1, 2, 3]) → true
// no14([1, 2, 3, 4]) → false
// no14([2, 3, 4]) → true

function no14(nums){
  return !nums.includes(1) || !nums.includes(4);
}