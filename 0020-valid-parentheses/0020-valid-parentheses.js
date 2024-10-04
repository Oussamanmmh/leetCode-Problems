/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let validString =true
    let i = 0 ;

    while(validString && i < s.length){

        if(s[i] === '{' || s[i] === '[' || s[i] === '(' )
        {
            stack.push(s[i])
            i++ ;

        }
        else {
            let temp = stack.pop()
            if(temp+s[i]!=="{}" && temp+s[i]!=="[]" && temp+s[i]!=="()")
                 validString = false ;
                  
            else {
                validString= true;
                i++
             } ;
            
        }
    }

    if (!stack.length == 0) return false

    return validString
    
};