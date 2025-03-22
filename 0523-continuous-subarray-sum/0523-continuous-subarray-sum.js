/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = new Map()
    map.set(0 ,-1)
    let sum = 0 
    let i = 0 
    for(let num of nums ){
        sum = (sum + num) % k;
        
        if(!map.has(sum)){
            map.set(sum , i)
        }
        else{
            if(i-map.get(sum)>=2)return true 
        }
        i++
    }
    return false 
};
