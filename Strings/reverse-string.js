let reverseString = function(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
      console.log(nums[start]);
    }

    return s;
  };

  let s = 'aayush';
  let ans = reverseString(s,0,s.length-1);
  console.log(ans);