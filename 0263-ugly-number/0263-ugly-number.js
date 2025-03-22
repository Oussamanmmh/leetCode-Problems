/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
   if(n<=0){
    return false
   }
    while(n > 1 ){
        if(n%2!=0){
            if(n%3!=0){
                if(n%5!=0){
                    return false 
                }
                else{
                    n=n/5
                }
            }
            else{
                 n=n/3
            }
        }
        else{
            n=n/2
        }
        
    }
    return true
};