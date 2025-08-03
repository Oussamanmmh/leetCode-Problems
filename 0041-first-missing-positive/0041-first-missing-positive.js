/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let missNumber = 1 ;
    nums.sort((a, b) => a - b) ;
    console.log(nums);
    for(let i=0; i< nums.length;i++){
        if(missNumber === nums[i]){
            console.log("we had : missnumber = "+missNumber +"and nums[i] = "+nums[i])
            missNumber ++ ;
        }
    }
    return missNumber ;
};