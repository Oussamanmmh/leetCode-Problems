/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let j = 1
    let k = 0
    let temp = [] 
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]%2!==0){
            temp[j] = nums[i]  ;
            j+=2;
        }
        else{
            temp[k] = nums[i];
            k+=2 ;
        }
    }
    return temp
};