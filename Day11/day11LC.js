// leetcode 2634
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        result.push(arr[i]);
      }
    }
    return result;
  };

// leetcode 2626
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length==0)
    return init;
    let val=fn(init,nums[0]);
    for (let i=1;i<nums.length;i++)
    {
        val=fn(val,nums[i]);
    }
    return val;
};