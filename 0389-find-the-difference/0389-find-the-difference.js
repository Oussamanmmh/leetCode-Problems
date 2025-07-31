/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const count = {}
    for(let c of s ){
        count[c] = (count[c] || 0)  + 1 ;
    }
    for(let c of t){
        if(!count[c]) return c
        count[c]-- ;
    }
};