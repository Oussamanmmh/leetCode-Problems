/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
     while(true){
        if(n===1)return true
        if(n<1)return false
        n = n / 3 
    }
    
};