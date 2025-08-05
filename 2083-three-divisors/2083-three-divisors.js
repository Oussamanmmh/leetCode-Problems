/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let nbrDivisor =0  ;
    for(let i = 2 ; i < n ; i ++ ){
        if(n%i===0) nbrDivisor++ ;
    }
    return nbrDivisor===1?true : false ;
};