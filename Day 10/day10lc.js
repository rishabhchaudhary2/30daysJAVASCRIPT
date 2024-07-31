//leetcode [2665]
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const temp=init;
   const myObject={
       increment(){
       init=init+1;
       return init
       },
        reset(){
           init=temp;
           return init;
       },
        decrement(){
           init=init-1;
           return init;
       }
       
   };
   return myObject; 
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/



// [LeetCode 2635]
// Given an integer array arr and a mapping function fn, return a new array 
// with a transformation applied to each element.

// The returned array should be created such that 
// returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

//solution:

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=fn(arr[i],i);
    }
    return arr;
};