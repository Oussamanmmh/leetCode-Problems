/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

    const evens = [];
    const odds = [];

    for (let num of nums) {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    }

    return [...evens, ...odds];
   
};