/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
     counter = n  
     firstTime = true 
    return function() {
        if (firstTime){
            firstTime = false 
            return counter
        }
        counter+=1
        return counter
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */