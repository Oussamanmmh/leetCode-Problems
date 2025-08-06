/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let v = "" ;
    for(let i=0; i<s.length;i++){
        if(s[i]!=="*"){
            v+=s[i] ;
        }
        else {
            v = v.substring(0,v.length-1)
        }
    }
    return v ;
};