let binarySearchRec = function(nums, target, low, high) {
    if (low > high) {
      return -1;
    }
    
    // Finding the mid using floor division
    let mid = low + Math.floor((high - low) / 2);
    
    // Target value is present at the middle of the array
    if (nums[mid] === target) {
      return mid;
    } 
  
    // Target value is present in the low subarray
    else if (target < nums[mid]) {
      return binarySearchRec(nums, target, low, (mid - 1));
    } 
    
    // Target value is present in the high subarray
    else {
      return binarySearchRec(nums, target, (mid + 1), high);
    }
  };
  
  let binarySearch = function(nums, target) {
    return binarySearchRec(nums, target, 0, (nums.length - 1));
  };
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 9;
  let ans = binarySearchRec(nums, target, 0, nums.length-1);
  console.log(ans);


// The space complexity of this solution is logarithmic, O(log n) 
//   because the recursive approach consumes memory on the stack.

// The time complexity of this solution is logarithmic, O(logn)