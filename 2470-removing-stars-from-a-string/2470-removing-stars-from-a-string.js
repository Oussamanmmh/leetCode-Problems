/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let v = [] ;
    for(const i of s ){
       i === "*" ? v.pop() : v.push(i) ;
    }
    return v.join("") ;
};