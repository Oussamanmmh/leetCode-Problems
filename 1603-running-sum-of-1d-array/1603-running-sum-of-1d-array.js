/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = []
    let currSum = 0 
    let i=0
    for (let num of nums){
        currSum+=num
        runningSum[i]=currSum
        i++  
    }
    return runningSum
};