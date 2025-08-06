/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let v = [] ;
    for(let i=0; i<s.length;i++){
        if(s[i]!=="*"){
           v.push(s[i]) ;
        }
        else {
           v.pop() ;
        }
    }
    return v.join("") ;
};