/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    usedValue = init 
    nums.forEach(num=>{
        usedValue = fn(usedValue , num)
    })
    return usedValue 
};