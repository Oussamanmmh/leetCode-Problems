/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
   const tempNums = []
    for(let i =0 ; i < nums.length  ; i++){
            if(nums[i]%2!==0){
               tempNums.push(nums[i])
            }
            else{
                tempNums.unshift(nums[i])
            }
    }
    
   return tempNums ;
};