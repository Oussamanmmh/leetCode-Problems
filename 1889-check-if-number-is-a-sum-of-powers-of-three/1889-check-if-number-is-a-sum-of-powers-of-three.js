/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    if (n === 0) return true;  
    if (n % 3 === 2) return false; 
    return checkPowersOfThree(Math.floor(n / 3)); 
};