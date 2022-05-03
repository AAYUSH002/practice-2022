let binarySearch = function(nums, target) {
    //TODO: Write - Your - Code
    let low = 0;
    let high = nums.length-1;
    for(let i=0;i<nums.length;i++){
      let mid = Math.floor((low + high)/2);
      if(target === nums[mid]){
        return mid;
      }else if(target < nums[mid]){
        high = mid-1;
      }else {
        low = mid+1;
      }
    }
    return -1;
  };

  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 9;
  let ans = binarySearch(nums, target);
  console.log(ans);

  // array is already sorted 
  // Time Complexity - O(logn)
  // Space Complexity - O(1)