/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    i = 0
    if(n<=0)return false
    while(n !=0){
        n=n&(n-1)
        i++
        if (i>1) return false 
    }
    return true
};