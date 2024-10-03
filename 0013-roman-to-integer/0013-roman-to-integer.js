/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

         const romanMap = {
                    'I': 1,
                    'V': 5,
                    'X': 10,
                    'L': 50,
                    'C': 100,
                    'D': 500,
                    'M': 1000
                     };
      
    let p = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            // If the current value is smaller than the next, subtract it
            p -= romanMap[s[i]];
        } else {
            // Otherwise, add the current value
            p += romanMap[s[i]];
        }
    }

    return p;

};